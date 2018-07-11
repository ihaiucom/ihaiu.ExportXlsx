using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using CommandLine;

public class StartOptions
{
    [Option("autoEnd", Required = false, Default = true)]
    public bool autoEnd { get; set; }

    [Option("setting", Required = false, Default = "./ExportKeysetting.json")]
    public string setting { get; set; }


    // 表头--Type 所在行
    [Option("xlsxHeadTypeLine", Required = false, Default = 1)]
    public int xlsxHeadTypeLine { get; set; }

    // 表头--中文 所在行
    [Option("xlsxHeadCnLine", Required = false, Default = 2)]
    public int xlsxHeadCnLine { get; set; }

    // 表头--字段 所在行
    [Option("xlsxHeadFieldLine", Required = false, Default = 3)]
    public int xlsxHeadFieldLine { get; set; }



    //public void Save(string path = null)
    //{
    //    if (string.IsNullOrEmpty(path))
    //        path = "./ExportKeysetting.json";

    //    string json = JsonHelper.ToJsonType(this);
    //    File.WriteAllText(path, json);
    //}

    //public static StartOptions Load(string path = null)
    //{
    //    if (string.IsNullOrEmpty(path))
    //        path = "./ExportKeysetting.json";

    //    string json = File.ReadAllText(path);
    //    StartOptions options = JsonHelper.FromJson<StartOptions>(json);
    //    return options;
    //}
}