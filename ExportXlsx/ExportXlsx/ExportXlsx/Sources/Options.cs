using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using CommandLine;

namespace ExportXlsx.Sources
{
    public class Options
    {
        // 运行完，是否自动关闭cmd
        [Option("autoEnd", Required = false, Default = true)]
        public bool autoEnd { get; set; }

        // 启动参数设置 配置路径
        [Option("optionSetting", Required = false, Default = "./optionSetting.json")]
        public string optionSetting { get; set; }

        // xlsx目录(可以用分号';'分割填写多个路径)
        [Option("xlsxDir", Required = false, Default = "../Config")]
        public string xlsxDir { get; set; }

        // 配置输出目录
        [Option("outDir", Required = false, Default = "../ConfigOut")]
        public string outDir { get; set; }

        // xlsx配置文件 (可以配置扩展数据结构)
        [Option("exportSettingXlsx", Required = false, Default = "../Config/ExportSetting.xlsx")]
        public string exportSettingXlsx { get; set; }

        // xlsx配置文件数据结构配置在哪个表单 (exportSettingXlsx文件中的StructSheet表单)
        [Option("settingStructSheet", Required = false, Default = "StructSheet")]
        public string settingStructSheet { get; set; }

        // xlsx配置文件忽略配置在哪个表单 (exportSettingXlsx文件中的IgnoreSheet表单)
        [Option("settingIgnoreSheet", Required = false, Default = "IgnoreSheet")]
        public string settingIgnoreSheet { get; set; }

        // 导出TypeScript文件的模板
        [Option("templateDir", Required = false, Default = "./Template")]
        public string templateDir { get; set; }

        // csv分隔符
        [Option("csvSeparator", Required = false, Default = "\t")]
        public string csvSeparator { get; set; }

        // xlsx文件内容如果有用到csv分隔符时，用该配置替换
        [Option("csvSeparatorReplace", Required = false, Default = "")]
        public string csvSeparatorReplace { get; set; }

        // xlsx文件内容如果有用到换行符时，用该配置替换
        [Option("csvLineSeparatorReplace", Required = false, Default = "|n|")]
        public string csvLineSeparatorReplace { get; set; }

        // 表头--Type 所在行
        [Option("xlsxHeadTypeLine", Required = false, Default = 1)]
        public int xlsxHeadTypeLine { get; set; }

        // 表头--中文 所在行
        [Option("xlsxHeadCnLine", Required = false, Default = 2)]
        public int xlsxHeadCnLine { get; set; }

        // 表头--字段 所在行
        [Option("xlsxHeadFieldLine", Required = false, Default = 3)]
        public int xlsxHeadFieldLine { get; set; }


        public void Save(string path = null)
        {
            if (string.IsNullOrEmpty(path))
                path = "./optionSetting.json";

            string json = JsonHelper.ToJsonType(this);
            File.WriteAllText(path, json);
        }

        public static Options Load(string path = null)
        {
            if (string.IsNullOrEmpty(path))
                path = "./optionSetting.json";

            string json = File.ReadAllText(path);
            Options options = JsonHelper.FromJson<Options>(json);
            return options;
        }
    }
}
