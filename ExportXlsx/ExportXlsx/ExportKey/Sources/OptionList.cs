using System;
using System.Collections.Generic;
using System.IO;
using System.Text;


public class OptionList
{
    public List<OptionItem> list = new List<OptionItem>();


    public void Save(string path = null)
    {
        if (string.IsNullOrEmpty(path))
            path = "./ExportKeysetting.json";

        string json = JsonHelper.ToJsonType(this);
        File.WriteAllText(path, json);
    }

    public static OptionList Load(string path = null)
    {
        if (string.IsNullOrEmpty(path))
            path = "./ExportKeysetting.json";

        string json = File.ReadAllText(path);
        OptionList options = JsonHelper.FromJson<OptionList>(json);
        return options;
    }
}


public class OptionItem
{
    // excel文件
    public string xlsx;
    // id的字段名
    public string idField = "id";
    // key的字段名
    public string keyField = "key";
    // 描述模块字段名
    public string txtModuleField = "module";
    // 描述字段名
    public string txtNameField = "name";
    // 模版路径
    public string tplPath = "Template/TS/KeyTemplate.txt";
    // 保存代码路径
    public string codePath;
    // 类名
    public string codeClassname;
    // 生成空白Key
    public bool generateEmptyKey = true;
    // 生成空白Key是否用全拼
    public bool generateFullPing = true;
    // 是否生成代码
    public bool generateCode = true;
    // 是否生成代码注释
    public bool generateCodeNote = true;
    // 是否替换之前的代码
    public bool replaceCode = false;
    // 是否替换之前的代码根目录
    public string replaceCodeRoot;

}