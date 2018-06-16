using System;
using System.Collections.Generic;
using System.Text;
using CommandLine;

namespace ExportXlsx.Sources
{
    public class Options
    {
        [Option("xlsxDir", Required = false, Default = "../Configs")]
        public string xlsxDir { get; set; }


        [Option("outDir", Required = false, Default = "../ConfigOuts")]
        public string outDir { get; set; }


        [Option("settingXlsx", Required = false, Default = "../Configs/Setting.xlsx")]
        public string settingXlsx { get; set; }


        [Option("settingStructSheet", Required = false, Default = "StructSheet")]
        public string settingStructSheet { get; set; }


        [Option("templateDir", Required = false, Default = "./Template")]
        public string templateDir { get; set; }

    }
}
