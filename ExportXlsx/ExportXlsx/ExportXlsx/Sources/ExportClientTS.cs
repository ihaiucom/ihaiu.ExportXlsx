using BeardedManStudios.Templating;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;

namespace ExportXlsx.Sources
{
    public class ExportClientTS
    {
        public DataStruct dataStruct;

        public bool isExtend = false;
        public string fieldName;
        public string tableName;
        public string classNameConfig;
        public string classNameConfigStruct;
        public string classNameConfigReader;
        public string classNameConfigReaderStruct;


        public void Export()
        {
            Log.Info("ExportClientTS:" + dataStruct.name);
            tableName = dataStruct.name;
            fieldName = dataStruct.name.FirstLower();

            isExtend = dataStruct.isExtend;
            if (isExtend)
            {
                classNameConfig = dataStruct.name;
                classNameConfigStruct = dataStruct.name + "Struct";
            }
            else
            {
                classNameConfig = dataStruct.name + "Config";
                classNameConfigStruct = dataStruct.name + "ConfigStruct";

                classNameConfigReader = dataStruct.name + "ConfigReader";
                classNameConfigReaderStruct = dataStruct.name + "ConfigReaderStruct";
            }

            ExportConfigStruct();
            ExportConfig();

            if(!isExtend)
            {
                ExportConfigReaderStruct();
                ExportConfigReader();
            }

        }

        public void ExportConfigStruct()
        {
            List<object[]> dicts = new List<object[]>();
            List<object[]> fields = new List<object[]>();
            List<object[]> imports = new List<object[]>();
            Dictionary<string, bool> importDict = new Dictionary<string, bool>();

            string path = string.Format(OutPaths.Client.ConfigStructTeamplate, classNameConfigStruct);


            for (int i = 0; i < dataStruct.fields.Count; i ++)
            {
                DataField dataField = dataStruct.fields[i];

                if (!dataField.isExport)
                    continue;

                if(dataField.fieldNameIsEnable)
                {
                    object[] lines = new object[] { dataField.field, dataField.GetTsTypeName() };
                    fields.Add(lines);
                }
                else
                {
                    object[] lines = new object[] { dataField.field, dataField.GetTsTypeName(), Regex.Replace(dataField.field, @"[^A-Za-z0-9_]", @"_") };
                    dicts.Add(lines);
                }

                string importType = dataField.GetTsTypeImport();
                if(!string.IsNullOrEmpty(importType))
                {
                    if (!importDict.ContainsKey(importType))
                    {
                        importDict.Add(importType, true);
                        object[] lines = new object[] { importType, PathHelper.GetImportPath(path, dataField.GetTsTypeImportPath(importType)) };
                        imports.Add(lines);
                    }

                }


            }


            List<object[]> langs = new List<object[]>();


            for (int i = 0; i < dataStruct.fields.Count; i++)
            {
                DataField dataField = dataStruct.fields[i];

                if (!dataField.isExport)
                    continue;

                if (dataField.field.StartsWith("zh_cn_"))
                {
                    object[] lines = new object[] { dataField.field.Replace("zh_cn_", ""), dataField.field, fieldName, dataField.GetTsTypeName(), dataField.field.Replace("zh_cn_", "") };
                    langs.Add(lines);
                }
                else if (dataField.field.StartsWith("cn_"))
                {
                    object[] lines = new object[] { dataField.field.Replace("cn_", ""), dataField.field, fieldName, dataField.GetTsTypeName(), dataField.field.Replace("cn_", "") };
                    langs.Add(lines);
                }
            }



            string parse = "";
            string parseArray = "";

            if(isExtend)
            {
                StringWriter sw = new StringWriter() ;
                sw.WriteLine($"  static parse(txt: string): {classNameConfig} ");
                sw.WriteLine("      {");

                sw.WriteLine($"          let csv = toStringArray(txt);");
                sw.WriteLine($"          let config = new {classNameConfig}();");


                for (int i = 0; i < dataStruct.fields.Count; i ++)
                {
                    DataField dataField = dataStruct.fields[i];
                    sw.WriteLine($"          config.{dataField.field} = {GetParseCsvTxt(dataField, i)};");
                }

                sw.WriteLine("          return config;");
                sw.WriteLine("      }");

                parse = sw.ToString();



                // parseArray
                sw = new StringWriter();
                sw.WriteLine($"  static parseArray(txt: string): {classNameConfig}[] ");
                sw.WriteLine("      {");
                sw.WriteLine($"          let csv = toStringArray(txt, /[;]/);");
                sw.WriteLine($"          let list:{classNameConfig}[] = [];");
                sw.WriteLine($"          for(let i = 0; i < csv.length; i ++)");
                sw.WriteLine("          {");
                sw.WriteLine($"              list.push(      {classNameConfig}.parse(csv[i])          );");
                sw.WriteLine("           }");

                sw.WriteLine("          return list;");
                sw.WriteLine("      }");

                parseArray = sw.ToString();

            }



            TemplateSystem template = new TemplateSystem(File.ReadAllText(TemplatingFiles.Client.ConfigStructTemplates));
            template.AddVariable("classNameConfigStruct", classNameConfigStruct);
            template.AddVariable("imports", imports.ToArray());
            template.AddVariable("fields", fields.ToArray());
            template.AddVariable("dicts", dicts.ToArray());
            template.AddVariable("langs", langs.ToArray());
            template.AddVariable("parse", parse);
            template.AddVariable("parseArray", parseArray);
            string content = template.Parse();

            PathHelper.CheckPath(path);
            File.WriteAllText(path, content);
        }


        public void ExportConfig()
        {
            List<object[]> langs = new List<object[]>();

            List<object[]> imports = new List<object[]>();
            Dictionary<string, bool> importDict = new Dictionary<string, bool>();
            string path = string.Format(OutPaths.Client.ConfigTemplate, classNameConfig);


            for (int i = 0; i < dataStruct.fields.Count; i++)
            {
                DataField dataField = dataStruct.fields[i];

                if (dataField.field.StartsWith("zh_cn_"))
                {
                    object[] lines = new object[] { dataField.field.Replace("zh_cn_", ""), dataField.field };
                    langs.Add(lines);
                }
                else if (dataField.field.StartsWith("cn_"))
                {
                    object[] lines = new object[] { dataField.field.Replace("cn_", ""), dataField.field };
                    langs.Add(lines);
                }
            }

            imports.Add(new object[] { classNameConfigStruct , PathHelper.GetImportPath(path, string.Format(OutPaths.Client.ConfigStructTeamplate, classNameConfig)) });


            TemplateSystem template = new TemplateSystem(File.ReadAllText(TemplatingFiles.Client.ConfigTemplate));
            template.AddVariable("classNameConfig", classNameConfig);
            template.AddVariable("classNameConfigStruct", classNameConfigStruct);
            template.AddVariable("langs", langs.ToArray());
            template.AddVariable("imports", imports.ToArray());
            string content = template.Parse();


            PathHelper.CheckPath(path);
            File.WriteAllText(path, content);
        }


        public void ExportConfigReaderStruct()
        {
            string path = string.Format(OutPaths.Client.ConfigReaderStructTemplate, classNameConfigReaderStruct);

            List<object[]> dicts = new List<object[]>();
            List<object[]> fields = new List<object[]>();

            List<object[]> imports = new List<object[]>();
            Dictionary<string, bool> importDict = new Dictionary<string, bool>();

            imports.Add(new object[] { classNameConfig, PathHelper.GetImportPath(path, string.Format(OutPaths.Client.ConfigTemplate, classNameConfig) ) });

            for (int i = 0; i < dataStruct.fields.Count; i++)
            {
                DataField dataField = dataStruct.fields[i];

                if (!dataField.isExport)
                    continue;

                if (dataField.fieldNameIsEnable)
                {
                    object[] lines = new object[] { dataField.field, GetParseTxt(dataField) };
                    fields.Add(lines);
                }
                else
                {
                    object[] lines = new object[] { dataField.field, GetParseTxt(dataField) };
                    dicts.Add(lines);
                }


                string importType = dataField.GetTsTypeImport();
                if (!string.IsNullOrEmpty(importType))
                {
                    if (!importDict.ContainsKey(importType))
                    {
                        importDict.Add(importType, true);
                        object[] lines = new object[] { importType, PathHelper.GetImportPath(path, dataField.GetTsTypeImportPath(importType)) };
                        imports.Add(lines);
                    }

                }

            }


            TemplateSystem template = new TemplateSystem(File.ReadAllText(TemplatingFiles.Client.ConfigReaderStructTemplate));
            template.AddVariable("classNameConfig", classNameConfig);
            template.AddVariable("classNameConfigReaderStruct", classNameConfigReaderStruct);
            template.AddVariable("tableName", tableName);
            template.AddVariable("fields", fields.ToArray());
            template.AddVariable("dicts", dicts.ToArray());
            template.AddVariable("imports", imports.ToArray());
            string content = template.Parse();

            PathHelper.CheckPath(path);
            File.WriteAllText(path, content);
        }


        public void ExportConfigReader()
        {

            string path = string.Format(OutPaths.Client.ConfigReaderTemplate, classNameConfigReader);

            List<object[]> imports = new List<object[]>();
            Dictionary<string, bool> importDict = new Dictionary<string, bool>();

            imports.Add(new object[] { classNameConfigReaderStruct, PathHelper.GetImportPath(path, string.Format(OutPaths.Client.ConfigReaderStructTemplate, classNameConfigReaderStruct)) });

            TemplateSystem template = new TemplateSystem(File.ReadAllText(TemplatingFiles.Client.ConfigReaderTemplate));
            template.AddVariable("classNameConfigReader", classNameConfigReader);
            template.AddVariable("classNameConfigReaderStruct", classNameConfigReaderStruct);
            template.AddVariable("imports", imports.ToArray());
            string content = template.Parse();


            PathHelper.CheckPath(path);
            File.WriteAllText(path, content);
        }



        public static void ExportConfigIncludes(List<ExportClientTS> list)
        {
            List<object[]> lines = new List<object[]>();
            foreach(ExportClientTS item in list)
            {
                lines.Add(new object[] { item.classNameConfig});
            }
            TemplateSystem template = new TemplateSystem(File.ReadAllText(TemplatingFiles.Client.ConfigIncludesTemplate));
            template.AddVariable("list", lines.ToArray());
            string content = template.Parse();
            string path = OutPaths.Client.ConfigIncludesTemplate;


            PathHelper.CheckPath(path);
            File.WriteAllText(path, content);
        }

        public static void ExportConfigManagerList(List<ExportClientTS> list)
        {

            string path = OutPaths.Client.ConfigManagerListTemplate;

            List<object[]> imports = new List<object[]>();
            Dictionary<string, bool> importDict = new Dictionary<string, bool>();


            List<object[]> lines = new List<object[]>();
            foreach (ExportClientTS item in list)
            {
                if (item.isExtend)
                    continue;

                lines.Add(new object[] { item.fieldName, item.classNameConfigReader });
                imports.Add(new object[] { item.classNameConfigReader, PathHelper.GetImportPath(path, string.Format(OutPaths.Client.ConfigReaderTemplate, item.classNameConfigReader) )});
            }
            TemplateSystem template = new TemplateSystem(File.ReadAllText(TemplatingFiles.Client.ConfigManagerListTemplate));
            template.AddVariable("tables", lines.ToArray());
            template.AddVariable("imports", imports.ToArray());
            string content = template.Parse();


            PathHelper.CheckPath(path);
            File.WriteAllText(path, content);
        }

        public string GetParseTxt(DataField dataField)
        {
            string typeName = dataField.typeName.ToLower().Trim();

            if (typeName == "array")
                Log.Error($"{typeName} {dataField.field} {dataField.cn}");

            switch (typeName)
            {
                case "string":
                    return $"csvGetString(csv,  this.GetHeadIndex(  \"{dataField.field}\"  )   )";
                case "int":
                case "int64":
                    return $"csvGetInt(csv,  this.GetHeadIndex(  \"{dataField.field}\"  )   )";
                case "float":
                case "double":
                    return $"csvGetFloat(csv,  this.GetHeadIndex(  \"{dataField.field}\"  )   )";
                case "boolean":
                case "bool":
                    return $"csvGetBoolean(csv,  this.GetHeadIndex(  \"{dataField.field}\"  )   )";
            }

            


            switch (typeName)
            {
                case "string[]":
                    return $" toStringArray(       csvGetString(csv,  this.GetHeadIndex(  \"{dataField.field}\"  )   )   )";
                case "int[]":
                case "int64[]":
                    return $" toIntArray(       csvGetString(csv,  this.GetHeadIndex(  \"{dataField.field}\"  )   )   )";
                case "float[]":
                case "double[]":
                    return $" toFloatArray(       csvGetString(csv,  this.GetHeadIndex(  \"{dataField.field}\"  )   )   )";
                case "boolean[]":
                case "bool[]":
                    return $" toBooleanArray(       csvGetString(csv,  this.GetHeadIndex(  \"{dataField.field}\"  )   )   )";
            }

            typeName = dataField.GetTsTypeName();
            if (typeName.EndsWith("[]"))
            {
                typeName = typeName.Replace("[]", "");
                return $" {typeName}.parseArray(       csvGetString(csv,  this.GetHeadIndex(  \"{dataField.field}\"  )   )   )";

            }
            else
            {
                return $" {typeName}.parse(       csvGetString(csv,  this.GetHeadIndex(  \"{dataField.field}\"  )   )   )";
            }




            return $"csvGetString(csv,  this.GetHeadIndex(  \"{dataField.field}\"  )   );";
        }



        public string GetParseCsvTxt(DataField dataField, int i)
        {
            string typeName = dataField.typeName.ToLower().Trim();
            switch (typeName)
            {
                case "string":
                    return $"csvGetString(csv,  {i}   )";
                case "int":
                case "int64":
                    return $"csvGetInt(csv,  {i} )";
                case "float":
                case "double":
                    return $"csvGetFloat(csv,  {i}  )";
                case "boolean":
                case "bool":
                    return $"csvGetBoolean(csv, {i}   )";
            }

            typeName = dataField.GetTsTypeName();



            switch (typeName)
            {
                case "string[]":
                    return $" toStringArray(       csvGetString(csv, {i}   )   )";
                case "int[]":
                case "int64[]":
                    return $" toIntArray(       csvGetString(csv,  {i}   )   )";
                case "float[]":
                case "double[]":
                    return $" toFloatArray(       csvGetString(csv,  {i}   )   )";
                case "boolean[]":
                case "bool[]":
                    return $" toBooleanArray(       csvGetString(csv,  {i}   )   )";
            }

            if (typeName.EndsWith("[]"))
            {
                typeName = typeName.Replace("[]", "");
                return $" {typeName}.parseArray(       csvGetString(csv,  {i}   )   )";

            }
            else
            {
                return $" {typeName}.parse(       csvGetString(csv,  {i}   )   )";
            }




            return $"csvGetString(csv,  {i}   )";
        }
    }
}
