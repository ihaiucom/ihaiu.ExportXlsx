using BeardedManStudios.Templating;
using OfficeOpenXml;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;

namespace ExportXlsx.Sources
{
    public class TableReader
    {
        // 配置选项
        public OptionItem option;
        // xlsx文件
        public string path;

        // sheet名称
        public string sheetName;

        // 表面
        public string tableName;

        // 数据结构
        public DataStruct dataStruct = new DataStruct();

        public Dictionary<int, DataField> fieldDictByIndex = new Dictionary<int, DataField>();

        // 列字典
        public Dictionary<string, int> columnsDict = new Dictionary<string, int>();

        // 数据列表
        public List<Dictionary<string, string>> dataList = new List<Dictionary<string, string>>();


        public void Load()
        {

            if (string.IsNullOrEmpty(tableName))
            {
                tableName = Path.GetFileNameWithoutExtension(path).FirstUpper();
            }
            Log.Info($"读取配置表 {tableName}");
            dataStruct.name = tableName;

            var xlsx = new FileInfo(path);
            using (var package = new ExcelPackage(xlsx))
            {

                ExcelWorksheet ws = null;
                if (package.Workbook.Worksheets.Count > 0)
                {
                    IEnumerator enumerator = package.Workbook.Worksheets.GetEnumerator();
                    while (enumerator.MoveNext() && ws == null)
                    {
                        if(string.IsNullOrEmpty(sheetName))
                        {
                            ws = (ExcelWorksheet)enumerator.Current;
                        }
                        else
                        {
                            if (((ExcelWorksheet)enumerator.Current).Name == sheetName)
                            {
                                ws = (ExcelWorksheet)enumerator.Current;
                            }
                        }
                    }
                }

                if(ws == null)
                {
                    Log.Error($"没有找到sheet path:{path}, sheetName:{sheetName}");
                    return;
                }

                if(ws.Cells.Rows < 3)
                {
                    Log.Error($" path:{path}, sheetName:{sheetName}， rows:{ws.Cells.Rows}, 行数小于3行， 必须要有(type, cn, field)");
                    return;
                }

                int columnNum = 0;
                for(int i = 1; i < ws.Cells.Columns; i ++ )
                {

                    if (ws.Cells[1, i].Value == null)
                        break;

                    if (ws.GetValue(2, i) == null)
                    {
                        Log.Error($" path:{path}, sheetName:{sheetName}， 是空单元格 2行{i}列  ");
                        continue;
                    }

                    if (ws.GetValue(3, i) == null)
                    {
                        Log.Error($" path:{path}, sheetName:{sheetName}， 是空单元格 3行{i}列  ");
                        continue;
                    }


                    string type = ws.GetValue(Setting.Options.xlsxHeadTypeLine, i).ToString().Trim();
                    string cn = ws.GetValue(Setting.Options.xlsxHeadCnLine, i).ToString().Trim();
                    string en = ws.GetValue(Setting.Options.xlsxHeadFieldLine, i).ToString().Trim();

                    if (string.IsNullOrEmpty(type))
                    {
                        Log.Error($" path:{path}, sheetName:{sheetName}， 是空单元格 type行{i}列 {type} {cn} {en} ");
                        continue;
                    }

                    if (string.IsNullOrEmpty(en))
                    {
                        Log.Error($" path:{path}, sheetName:{sheetName}， 是空单元格 field{i}列 {type} {cn} {en} ");
                        continue;
                    }

                    DataField field = new DataField();
                    field.typeName = type;
                    field.cn = cn;
                    field.field = en;
                    field.index = i;
                    dataStruct.fields.Add(field);
                    fieldDictByIndex.Add(i, field);
                    columnsDict.Add(field.field, i);
                    columnNum = i;
                }


                int begin = 4;
                if (Setting.Options.hasHeadFilterLine)
                    begin = 5;

                for (int r = begin; r < ws.Cells.Rows; r ++)
                {

                    if (ws.Cells[r, 1].Value == null)
                        break;

                    Dictionary<string, string> rowData = new Dictionary<string, string>();
                    for (int c = 1; c <= columnNum; c ++)
                    {
                        string value = string.Empty;

                        if (ws.Cells[r, c].Value != null)
                        {
                            value = ws.GetValue(r, c).ToString().Trim();
                        }
                        

                        if (fieldDictByIndex.ContainsKey(c))
                        {

                            if(rowData.ContainsKey(fieldDictByIndex[c].field))
                            {
                                Log.Error($" path:{path}, sheetName:{sheetName}， 存在相同的 field={fieldDictByIndex[c].field} {c}列");

                            }
                            else
                            {
                                rowData.Add(fieldDictByIndex[c].field, value);
                            }
                        }
                    }

                    if(rowData.Count > 0)
                    {
                        dataList.Add(rowData);
                    }

                }



            }
        }

        bool isChangKey = false;
        public void GenerateEmptyKey()
        {

            if (!option.generateEmptyKey)
            {
                return;
            }

            string patt = @"[^A-Za-z0-9_\u4e00-\u9fa5]";

            for (int i = 0; i < dataList.Count; i ++)
            {
                Dictionary<string, string> rowData = dataList[i];
                if(string.IsNullOrEmpty(rowData[option.keyField]))
                {
                    string txt = "KEY_" + rowData[option.idField] + "_";
                    string str;
                    if(!string.IsNullOrEmpty(option.txtModuleField) && !string.IsNullOrEmpty(rowData[option.txtModuleField]))
                    {
                        str = rowData[option.txtModuleField];
                        str = Regex.Replace(str, patt, string.Empty);
                        str = PinYinConverterHelp.GetFullPing(str, string.Empty);
                        txt += str + "__";

                    }


                    str = rowData[option.txtNameField];
                    str = Regex.Replace(str, patt, string.Empty);
                    if (str.Length < 8)
                    {
                        str = PinYinConverterHelp.GetFullPing(str, string.Empty);
                        txt += str;
                    }
                    else
                    {
                        txt += PinYinConverterHelp.GetFullPing(str.Substring(0, 4), string.Empty) + "__" + PinYinConverterHelp.GetFullPing(str.Substring(str.Length - 4, 4), string.Empty);
                    }
                    rowData[option.keyField] = txt;
                    isChangKey = true;
                    //Console.WriteLine();
                    //Console.WriteLine(rowData[option.txtNameField]);
                    //Console.WriteLine(txt);
                }
            }
        }

        public void SaveExcel()
        {
            if (!isChangKey)
                return;



            var xlsx = new FileInfo(path);
            using (var package = new ExcelPackage(xlsx))
            {

                ExcelWorksheet ws = null;
                if (package.Workbook.Worksheets.Count > 0)
                {
                    IEnumerator enumerator = package.Workbook.Worksheets.GetEnumerator();
                    while (enumerator.MoveNext() && ws == null)
                    {
                        if (string.IsNullOrEmpty(sheetName))
                        {
                            ws = (ExcelWorksheet)enumerator.Current;
                        }
                        else
                        {
                            if (((ExcelWorksheet)enumerator.Current).Name == sheetName)
                            {
                                ws = (ExcelWorksheet)enumerator.Current;
                            }
                        }
                    }
                }

                if (ws == null)
                {
                    Log.Error($"没有找到sheet path:{path}, sheetName:{sheetName}");
                    return;
                }

                int columnIndex = columnsDict[option.keyField];
                for (int i = 0; i < dataList.Count; i++)
                {
                    Dictionary<string, string> rowData = dataList[i];
                    string key = rowData[option.keyField];
                    int rowIndex = 4 + i;


                    if (ws.Cells[rowIndex, columnIndex].Value == null || string.IsNullOrEmpty(ws.Cells[rowIndex, columnIndex].Value.ToString().Trim()))
                    {
                        ws.Cells[rowIndex, columnIndex].Value = key;
                    }
                }

                package.Save();

            }
        }

        public void SaveCode()
        {

            List<object[]> fields = new List<object[]>();


            // 0 KeyField
            // 1 KeyValue
            // 2 ID
            // 3 ModuleName
            // 4 Name
            for (int i = 0; i < dataList.Count; i++)
            {
                Dictionary<string, string> rowData = dataList[i];

                object[] lines = new object[5];
                lines[0] = rowData[option.keyField].Replace("-", "_").Replace(" ", "");
                lines[1] = rowData[option.keyField];
                lines[2] = rowData[option.idField];
                lines[3] = string.IsNullOrEmpty(option.txtModuleField) ? string.Empty : rowData[option.txtModuleField];
                lines[4] = rowData[option.txtNameField];

                fields.Add(lines);
            }


            TemplateSystem template = new TemplateSystem(File.ReadAllText(option.tplPath));
            template.AddVariable("className", option.codeClassname);
            template.AddVariable("fields", fields.ToArray());
            string content = template.Parse();
            string path = option.codePath;

            PathHelper.CheckPath(path);
            File.WriteAllText(path, content);
        }

        // 替换老代码
        private List<string[]> GetReplaceList(List<string[]> list = null)
        {
            if(list == null)
                list = new List<string[]>();

            for (int i = 0; i < dataList.Count; i++)
            {
                Dictionary<string, string> rowData = dataList[i];

                //string keyid = $@"GlobalKey\.KEY_100(?=[,\s\t\);\.\+\-\*\/]+?)";
                string keyid = $@"{option.codeClassname}\.KEY_{rowData[option.idField]}(?=[,\s\t\);\.\+\-\*\/]+?)";
                string key = option.codeClassname +  "." + rowData[option.keyField].Replace("-", "_").Replace(" ", "");
                list.Add(new string[] { keyid, key});
            }
            return list;
        }

        // 替换老代码
        public void ReplaceOldCode()
        {
            if(option.replaceCode && Directory.Exists(option.replaceCodeRoot))
            {
                List<string[]> list = GetReplaceList();
                ReplaceOldCode(option.replaceCodeRoot, list);
            }
        }

        private void ReplaceOldCode(string root, List<string[]> list)
        {
            DirectoryInfo dir = new DirectoryInfo(root);
            FileSystemInfo[] fileinfo = dir.GetFileSystemInfos();  //获取目录下（不包含子目录）的文件和子目录
            foreach (FileSystemInfo itemInfo in fileinfo)
            {
                if (itemInfo is DirectoryInfo)     //判断是否文件夹
                {
                    ReplaceOldCode(itemInfo.FullName, list);    //递归调用复制子文件夹
                }
                else
                {
                    string path = itemInfo.FullName;
                    if (Path.GetExtension(path).ToLower() != ".ts")
                        continue;



                    string content = File.ReadAllText(path);
                    string txt = content;
                    foreach (var item in list)
                    {
                        txt = Regex.Replace(txt, item[0], item[1]);
                    }

                    if (txt != content)
                    {
                        File.WriteAllText(path, txt);
                    }
                }
            }
        }
    }
}
