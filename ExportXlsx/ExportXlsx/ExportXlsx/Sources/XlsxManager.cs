using System;
using System.Collections.Generic;
using System.Text;
using System.IO;

namespace ExportXlsx.Sources
{
    public class XlsxManager
    {
        public Dictionary<string, TableReader> tables = new Dictionary<string, TableReader>();
        public Dictionary<string, DataStruct> dataStructs = new Dictionary<string, DataStruct>();

        public TableReader ignaoreTable = new TableReader();
        public List<string> ignaoreTableList = new List<string>();
        public TableReader structTable = new TableReader();

        public DataStruct GetDataStruct(string name)
        {
            if(dataStructs.ContainsKey(name))
            {
                return dataStructs[name];
            }
            return null;
        }

        public void LoadIgnore()
        {
            ignaoreTable.path = Setting.Options.exportSettingXlsx;
            ignaoreTable.sheetName = Setting.Options.settingIgnoreSheet;
            ignaoreTable.Load();

            foreach (Dictionary<string, string> rowData in ignaoreTable.dataList)
            {
                string tableName = rowData["tableName"].ToLower().Replace("\\", "/");
                if (!tableName.EndsWith(".xlsx"))
                {
                    tableName += ".xlsx";
                }

                ignaoreTableList.Add(tableName);
            }
        }

        public bool IsIgnore(string path)
        {
            path = path.Replace("\\", "/").ToLower();
            bool result = false;
            foreach(string name in ignaoreTableList)
            {
                if(path.EndsWith(name))
                {
                    result = true;
                    break;
                }
            }
            return result;
        }

        public void LoadDTStructs()
        {
            structTable.path = Setting.Options.exportSettingXlsx;
            structTable.sheetName = Setting.Options.settingStructSheet;
            structTable.Load();

            foreach(Dictionary<string, string> rowData in structTable.dataList)
            {
                DataStruct dataStruct = new DataStruct();
                dataStruct.name = rowData["struct"];
                dataStruct.cn = rowData["structCN"];
                dataStruct.isExtend = true;

                string[] fields = rowData["field"].toStringArray();
                string[] types = rowData["type"].toStringArray();
                string[] cns = rowData["cn"].toStringArray();

                if (fields.Length != types.Length)
                {
                    Log.Error($"{structTable.path} sheet:{structTable.sheetName} { dataStruct.name } { dataStruct.cn} 配置有问题: fields.Length != types.Length");
                }

                for(int i = 0; i < fields.Length; i ++)
                {
                    DataField dataField = new DataField();
                    dataField.field = fields[i].Trim();
                    dataField.typeName = i < types.Length ? types[i].Trim() : "string";
                    dataField.cn = i < cns.Length ? cns[i].Trim() : "";
                    dataField.filterType = HeadFilterType.ALL;
                    dataStruct.fields.Add(dataField);
                }

                dataStructs.Add(dataStruct.name, dataStruct);
            }
        }

        public void LoadAllTable()
        {
            List<string> fileList = new List<string>();
            string[] dirs = Setting.Options.xlsxDir.Split(";");

            for(int i = 0; i < dirs.Length; i ++)
            {
                string dir = dirs[i].Trim();
                if(string.IsNullOrEmpty(dir))
                {
                    continue;
                }

                if(!Directory.Exists(dir))
                {
                    continue;
                }

                string[] files = Directory.GetFiles(dir, "*.xlsx", SearchOption.AllDirectories);
                foreach(string file in files)
                {
                    if (Path.GetFileName(file).StartsWith("~$"))
                        continue;

                    if(!fileList.Contains(file))
                    {
                        fileList.Add(file);
                    }
                }
            }

            for(int i = 0; i < fileList.Count; i ++)
            {
                string path = fileList[i].Trim();
                if (IsIgnore(path))
                    continue;

                TableReader tableReader = new TableReader();
                tableReader.path = path;
                tableReader.Load();
                tables.Add(tableReader.dataStruct.name, tableReader);
                dataStructs.Add(tableReader.dataStruct.name, tableReader.dataStruct);
            }
        }

        public void ExportTsAll()
        {
            if (Setting.Options.isExportTSClient)
                ExportTsClient();


            if (Setting.Options.isExportTSJsonClient)
                ExportTSJsonClient();

            if (Setting.Options.isExportTSServer)
                ExportTsServer();

        }

        public void ExportTSJsonClient()
        {
            List<ExportClientJsonTS> list = new List<ExportClientJsonTS>();
            foreach (var kvp in dataStructs)
            {
                ExportClientJsonTS item = new ExportClientJsonTS();
                item.dataStruct = kvp.Value;
                item.Export();

                list.Add(item);
            }

            //ExportClientTS.ExportConfigIncludes(list);
            ExportClientJsonTS.ExportConfigManagerList(list);
        }

        public void ExportTsClient()
        {
            List<ExportClientTS> list = new List<ExportClientTS>();
            foreach(var kvp in dataStructs)
            {
                ExportClientTS item = new ExportClientTS();
                item.dataStruct = kvp.Value;
                item.Export();

                list.Add(item);
            }

            //ExportClientTS.ExportConfigIncludes(list);
            ExportClientTS.ExportConfigManagerList(list);
        }

        public void ExportTsServer()
        {
            List<ExportServerTS> list = new List<ExportServerTS>();
            foreach (var kvp in dataStructs)
            {
                ExportServerTS item = new ExportServerTS();
                item.dataStruct = kvp.Value;
                item.Export();

                list.Add(item);
            }

        }

        public void ExportCsvs()
        {
            foreach(var kvp in tables)
            {
                ExportCsv.Export(kvp.Value);
            }
        }

        public void ExportJsons()
        {
            foreach (var kvp in tables)
            {
                ExportJson.Export(kvp.Value, this);
            }
        }

        public void ExportAllJsonsOnceObject()
        {
            ExportJsonToOnceObject.ExportAll(tables, this);
            ExportJsonToOnceObject2.ExportAll(tables, this);
            ExportJsonToOnceArray.ExportAll(tables, this);
        }
    }
}
