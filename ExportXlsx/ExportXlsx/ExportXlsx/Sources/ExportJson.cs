using LitJson;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace ExportXlsx.Sources
{
    public class ExportJson
    {
        public static void Export(TableReader table, XlsxManager xlsxManager)
        {
            Log.Info("ExportJson:" + table.path);
            string uidKey = table.fieldDictByIndex[1].field;


            JsonData jd = new JsonData();
            foreach (Dictionary<string, string> line in table.dataList)
            {
                JsonData lineJD = new JsonData();
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
                string uid = line[uidKey];
                jd[uid] = lineJD;
            }

            string jsonData = JsonMapper.ToJson(jd).ConvertJsonString();


            string path = Setting.JsonRoot + "/" + string.Format(Setting.Options.jsonNameFormat, table.tableName);
            PathHelper.CheckPath(path);
            File.WriteAllText(path, jsonData, Encoding.UTF8);
        }

        public static void Parse(DataField dataField, string txt, JsonData lineJD, XlsxManager xlsxManager)
        {
            string field = dataField.field;
            string typeName = dataField.typeName.ToLower().Trim();
            switch (typeName)
            {
                case "string":
                    lineJD[field] = txt;
                    //lineJD[field] = string.Format("\"{0}\"", txt.Replace("\"", "\\\""));
                    return;
                case "int64":
                    lineJD[field] = txt.ToInt64();
                    return;
                case "int":
                    lineJD[field] = txt.ToInt32();
                    return;
                case "double":
                    lineJD[field] = txt.ToDouble();
                    return;
                case "float":
                    lineJD[field] = txt.ToSingle();
                    return;
                case "boolean":
                case "bool":
                    lineJD[field] = txt.ToBoolean();
                    return;
            }


            if (typeName.EndsWith("[]"))
            {
                string[] csv = txt.toStringArray();

                JsonData jd = new JsonData();
                jd.SetJsonType(JsonType.Array);
                lineJD[field] = jd;
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
                if(dataStruct != null)
                {
                    lineJD[field] = ParseStructArray(txt, dataStruct, xlsxManager);
                }
                else
                {
                    lineJD[field] = txt;
                }
            }
            else
            {
                DataStruct dataStruct = xlsxManager.GetDataStruct(typeName);
                if (dataStruct != null)
                {
                    lineJD[field] = ParseStruct(txt, dataStruct, xlsxManager);
                }
                else
                {
                    lineJD[field] = txt;
                }
            }

        }

        public static JsonData ParseStruct(string txt,DataStruct dataStruct, XlsxManager xlsxManager)
        {
            JsonData jd = new JsonData();
            jd.SetJsonType(JsonType.Object);

            if(!string.IsNullOrEmpty(txt))
            {
                string[] csv = txt.toStringArray(@"[;,:,；,：,&]");
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


        public static JsonData ParseStructArray(string txt, DataStruct dataStruct,  XlsxManager xlsxManager)
        {
            JsonData jd = new JsonData();
            jd.SetJsonType(JsonType.Array);

            if (!string.IsNullOrEmpty(txt))
            {
                string[] csv = txt.toStringArray(@"[;,；,&]");
                for (int i = 0; i < csv.Length; i++)
                {
                    jd.Add(ParseStruct(csv[i], dataStruct, xlsxManager));
                }
            }
            return jd;
        }
    }

}
