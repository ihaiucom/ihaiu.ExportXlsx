using LitJson;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace ExportXlsx.Sources
{
    public class ExportJsonToOnceArray
    {
        public static void ExportAll(Dictionary<string, TableReader> tables, XlsxManager xlsxManager)
        {

            StringBuilder builder = new StringBuilder();
            builder.AppendLine("[");


            int count = tables.Count;
            int index = 0;
            foreach (var kvp in tables)
            {
                StringBuilder tableBuild = ExportTable(kvp.Value, xlsxManager);
                builder.AppendLine();
                builder.Append(tableBuild.ToString());
                if (index < count - 1) builder.AppendLine(",");
                builder.AppendLine();
                index++;
            }
            builder.AppendLine("]");


            string path = Setting.JsonOnceArray;
            PathHelper.CheckPath(path);
            File.WriteAllText(path, builder.ToString(), Encoding.UTF8);

        }

        public static StringBuilder ExportTable(TableReader table, XlsxManager xlsxManager)
        {
            string uidKey = table.fieldDictByIndex[1].field;

            int count = table.dataList.Count;
            int index = 0;
            StringBuilder builder = new StringBuilder();
            builder.AppendLine(string.Format("{{\"{0}\":[", table.tableName));
            foreach (Dictionary<string, string> line in table.dataList)
            {
                JsonData lineJD = new JsonData();
                lineJD.SetJsonType(JsonType.Array);
                foreach (var kvp in table.fieldDictByIndex)
                {
                    DataField dataField = kvp.Value;

                    if (!dataField.isExport)
                        continue;

                    string field = dataField.field;
                    string valueTxt = string.Empty;
                    if (line.ContainsKey(field))
                    {
                        valueTxt = line[field];
                    }

                    Parse(dataField, valueTxt, lineJD, xlsxManager);
                }

                string lineJson = JsonMapper.ToJson(lineJD).ConvertJsonString(Formatting.None);
                string uid = line[uidKey];

                builder.Append("    ");
                builder.Append(lineJson);
                if (index < count - 1) builder.AppendLine(",");

                index++;
            }

            builder.AppendLine();
            builder.AppendLine("]}");

            return builder;
        }



        public static void Parse(DataField dataField, string txt, JsonData lineJD, XlsxManager xlsxManager)
        {
            string field = dataField.field;
            string typeName = dataField.typeName.ToLower().Trim();
            switch (typeName)
            {
                case "string":
                    //lineJD[field] = txt;
                    lineJD.Add(txt);
                    //lineJD[field] = string.Format("\"{0}\"", txt.Replace("\"", "\\\""));
                    return;
                case "int64":
                    //lineJD[field] = txt.ToInt64();
                    lineJD.Add(txt.ToInt64());
                    return;
                case "int":
                    //lineJD[field] = txt.ToInt32();
                    lineJD.Add(txt.ToInt32());
                    return;
                case "double":
                    //lineJD[field] = txt.ToDouble();
                    lineJD.Add(txt.ToDouble());
                    return;
                case "float":
                    //lineJD[field] = txt.ToSingle();
                    int v = (int)(txt.ToSingle() * 1000);

                    lineJD.Add(v);
                    return;
                case "boolean":
                case "bool":
                    //lineJD[field] = txt.ToBoolean();
                    lineJD.Add(txt.ToBoolean());
                    return;
            }


            if (typeName.EndsWith("[]"))
            {
                string[] csv = txt.toStringArray();

                JsonData jd = new JsonData();
                jd.SetJsonType(JsonType.Array);
                //lineJD[field] = jd;
                lineJD.Add(jd);
                switch (typeName)
                {
                    case "string[]":
                        for (int i = 0; i < csv.Length; i++)
                        {
                            jd.Add(csv[i]);
                        }
                        return;

                    case "int64[]":
                        for (int i = 0; i < csv.Length; i++)
                        {
                            jd.Add(csv[i].ToInt64());
                        }
                        return;
                    case "int[]":
                        for (int i = 0; i < csv.Length; i++)
                        {
                            jd.Add(csv[i].ToInt32());
                        }
                        return;
                    case "double[]":
                        for (int i = 0; i < csv.Length; i++)
                        {
                            jd.Add(csv[i].ToDouble());
                        }
                        return;
                    case "float[]":
                        for (int i = 0; i < csv.Length; i++)
                        {
                            jd.Add(csv[i].ToSingle());
                        }
                        return;
                    case "boolean[]":
                    case "bool[]":
                        for (int i = 0; i < csv.Length; i++)
                        {
                            jd.Add(csv[i].ToBoolean());
                        }
                        return;
                }
            }

            typeName = dataField.GetTsTypeName();

            if (typeName.EndsWith("[]"))
            {
                typeName = typeName.Replace("[]", "");
                DataStruct dataStruct = xlsxManager.GetDataStruct(typeName);
                if (dataStruct != null)
                {
                    lineJD.Add(ParseStructArray(txt, dataStruct, xlsxManager));
                    //lineJD[field] = ParseStructArray(txt, dataStruct, xlsxManager);
                }
                else
                {
                    lineJD.Add(txt);
                    //lineJD[field] = txt;
                }
            }
            else
            {
                DataStruct dataStruct = xlsxManager.GetDataStruct(typeName);
                if (dataStruct != null)
                {
                    //lineJD[field] = ParseStruct(txt, dataStruct, xlsxManager);
                    lineJD.Add(ParseStruct(txt, dataStruct, xlsxManager));
                }
                else
                {
                    //lineJD[field] = txt;
                    lineJD.Add(txt);
                }
            }

        }

        public static JsonData ParseStruct(string txt, DataStruct dataStruct, XlsxManager xlsxManager)
        {
            JsonData jd = new JsonData();
            jd.SetJsonType(JsonType.Array);

            if (!string.IsNullOrEmpty(txt))
            {
                string[] csv = txt.toStringArray(@"[;,:,；,：]");
                for (int i = 0; i < dataStruct.fields.Count; i++)
                {
                    if (i >= csv.Length)
                        continue;

                    DataField dataField = dataStruct.fields[i];
                    Parse(dataField, csv[i], jd, xlsxManager);
                }
            }
            return jd;
        }


        public static JsonData ParseStructArray(string txt, DataStruct dataStruct, XlsxManager xlsxManager)
        {
            JsonData jd = new JsonData();
            jd.SetJsonType(JsonType.Array);

            if (!string.IsNullOrEmpty(txt))
            {
                string[] csv = txt.toStringArray(@"[;,；]");
                for (int i = 0; i < csv.Length; i++)
                {
                    jd.Add(ParseStruct(csv[i], dataStruct, xlsxManager));
                }
            }
            return jd;
        }
    }
}
