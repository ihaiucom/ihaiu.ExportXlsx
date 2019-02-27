using BeardedManStudios.Templating;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace ExportXlsx.Sources
{
    public class ExportServerTS
    {

        public DataStruct dataStruct;

        public bool isExtend = false;
        public string fieldName;
        public string tableName;
        public string classNameConfig;

        public void Export()
        {
            tableName = dataStruct.name;
            fieldName = dataStruct.name.FirstLower();

            isExtend = dataStruct.isExtend;
            if (isExtend)
            {
                classNameConfig = dataStruct.name;
            }
            else
            {
                classNameConfig = string.Format(Setting.Options.serverTsClassNameFormat, dataStruct.name);
            }

            if(isExtend)
            {
                ExportDT();
            }
            else
            {
                ExportConfig();
            }
            

        }


        public void ExportConfig()
        {
            List<object[]> fields = new List<object[]>();

            for (int i = 0; i < dataStruct.fields.Count; i++)
            {
                DataField dataField = dataStruct.fields[i];

                if (!dataField.isExport)
                    continue;

                object[] lines = new object[] { dataField.field, dataField.GetTsTypeName() };
                fields.Add(lines);
            }
            



            TemplateSystem template = new TemplateSystem(File.ReadAllText(TemplatingFiles.Server.ConfigTemplate));
            template.AddVariable("classNameConfig", classNameConfig);
            template.AddVariable("fields", fields.ToArray());
            string content = template.Parse();
            string path = string.Format(OutPaths.Server.ConfigTemplate, classNameConfig);

            PathHelper.CheckPath(path);
            File.WriteAllText(path, content);
        }

        public void ExportDT()
        {
            List<object[]> fields = new List<object[]>();

            for (int i = 0; i < dataStruct.fields.Count; i++)
            {
                DataField dataField = dataStruct.fields[i];

                object[] lines = new object[] { dataField.field, dataField.GetTsTypeName() };
                fields.Add(lines);
            }




            TemplateSystem template = new TemplateSystem(File.ReadAllText(TemplatingFiles.Server.DTTemplate));
            template.AddVariable("classNameConfig", classNameConfig);
            template.AddVariable("fields", fields.ToArray());
            string content = template.Parse();
            string path = string.Format(OutPaths.Server.DTTemplate, classNameConfig);

            PathHelper.CheckPath(path);
            File.WriteAllText(path, content);
        }
    }
}
