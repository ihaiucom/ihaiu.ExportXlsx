using System;
using System.Collections.Generic;
using System.IO;
using System.Text;


public class OptionList
{
    public List<OptionItem> enableoverwrites = new List<OptionItem>();
    public List<OptionItem> disableoverwrites = new List<OptionItem>();


    public void Save(string path = null)
    {
        if (string.IsNullOrEmpty(path))
            path = "./setting.json";

        string json = JsonHelper.ToJsonType(this);
        File.WriteAllText(path, json);
    }

    public static OptionList Load(string path = null)
    {
        if (string.IsNullOrEmpty(path))
            path = "./setting.json";

        string json = File.ReadAllText(path);
        OptionList options = JsonHelper.FromJson<OptionList>(json);
        return options;
    }
}


public class OptionItem
{
    public string src;
    public string dst;
}