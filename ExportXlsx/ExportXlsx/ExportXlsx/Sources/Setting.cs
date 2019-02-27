﻿using CommandLine;
using System;
using System.IO;

namespace ExportXlsx.Sources
{
    public class Setting
    {
        public static Options Options { get; set; }

        public static void Init(string[] args)
        {
            bool useSetting = args.Length == 0;
            foreach (string op in args)
            {
                if (op.StartsWith("--optionSetting"))
                {
                    useSetting = true;
                    break;
                }
            }

            Parse(args);

            if(!File.Exists(Options.optionSetting))
            {
                Options.Save(Options.optionSetting);
            }

            if(useSetting)
            {
                Options = Options.Load(Options.optionSetting);
            }
        }


        public static void Parse(string[] args)
        {
            Parser.Default.ParseArguments<Options>(args)
                .WithNotParsed(error => throw new Exception($"命令行格式错误!"))
                .WithParsed(options =>
                {
                    Options = options;
                });
        }


        public static string CsvRoot
        {
            get
            {
                return Options.outDir + "/csv";
            }
        }

        public static string JsonRoot
        {
            get
            {
                return Options.outDir + "/json";
            }
        }


        public static string JsonOnceObject
        {
            get
            {
                return Options.outDir + "/json_all/config_all.json";
            }
        }

        public static string JsonOnceObject2
        {
            get
            {
                return Options.outDir + "/json_all/config_all2.json";
            }
        }


        public static string JsonOnceArray
        {
            get
            {
                return Options.outDir + "/json_all/config_array.json";
            }
        }
    }
}
