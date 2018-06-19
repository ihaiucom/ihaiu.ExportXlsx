using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using CommandLine;

namespace ExportXlsx.Sources
{
    public class Options
    {
        [Option("autoEnd", Required = false, Default = true)]
        public bool autoEnd { get; set; }

        [Option("optionSetting", Required = false, Default = "./optionSetting.json")]
        public string optionSetting { get; set; }

        [Option("xlsxDir", Required = false, Default = "../Configs")]
        public string xlsxDir { get; set; }


        [Option("outDir", Required = false, Default = "../ConfigOuts")]
        public string outDir { get; set; }


        [Option("exportSettingXlsx", Required = false, Default = "../Configs/ExportSetting.xlsx")]
        public string exportSettingXlsx { get; set; }


        [Option("settingStructSheet", Required = false, Default = "StructSheet")]
        public string settingStructSheet { get; set; }


        [Option("templateDir", Required = false, Default = "./Template")]
        public string templateDir { get; set; }


        [Option("csvSeparator", Required = false, Default = ",")]
        public string csvSeparator { get; set; }

        [Option("csvSeparatorReplace", Required = false, Default = "，")]
        public string csvSeparatorReplace { get; set; }

        [Option("csvLineSeparatorReplace", Required = false, Default = "|n|")]
        public string csvLineSeparatorReplace { get; set; }


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
