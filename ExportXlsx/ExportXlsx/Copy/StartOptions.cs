using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using CommandLine;

public class StartOptions
{
    [Option("autoEnd", Required = false, Default = true)]
    public bool autoEnd { get; set; }

    [Option("setting", Required = false, Default = "./setting.json")]
    public string setting { get; set; }



    public void Save(string path = null)
    {
        if (string.IsNullOrEmpty(path))
            path = "./setting.json";

        string json = JsonHelper.ToJsonType(this);
        File.WriteAllText(path, json);
    }

    public static StartOptions Load(string path = null)
    {
        if (string.IsNullOrEmpty(path))
            path = "./setting.json";

        string json = File.ReadAllText(path);
        StartOptions options = JsonHelper.FromJson<StartOptions>(json);
        return options;
    }
}