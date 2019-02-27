using LitJson;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace ExportXlsx.Sources
{
    public class ExportJsonToOnceObject2
    {
        public static void ExportAll(Dictionary<string, TableReader> tables, XlsxManager xlsxManager)
        {

            StringBuilder builder = new StringBuilder();
            builder.AppendLine("{");

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
            builder.AppendLine("}");


            string path = Setting.JsonOnceObject2;
            PathHelper.CheckPath(path);
            File.WriteAllText(path, builder.ToString(), Encoding.UTF8);

        }

        public static StringBuilder ExportTable(TableReader table, XlsxManager xlsxManager)
        {
            string uidKey = table.fieldDictByIndex[1].field;

            int count = table.dataList.Count;
            int index = 0;
            StringBuilder builder = new StringBuilder();
            builder.AppendLine(string.Format("\"{0}\":{{", table.tableName));
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

                    ExportJson.Parse(dataField, valueTxt, lineJD, xlsxManager);
                }

                string lineJson = JsonMapper.ToJson(lineJD).ConvertJsonString(Formatting.None);
                string uid = line[uidKey];

                builder.Append(string.Format("  \"{0}\":", uid));
                builder.Append(lineJson);
                if (index < count - 1) builder.AppendLine(",");

                index++;
            }

            builder.Append("}");

            return builder;
        }
    }
}
