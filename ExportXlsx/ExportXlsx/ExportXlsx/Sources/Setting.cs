using CommandLine;
using System;

namespace ExportXlsx.Sources
{
    public class Setting
    {
        public static Options Options { get; set; }

        public static void Init(string[] args)
        {
            Parser.Default.ParseArguments<Options>(args)
                .WithNotParsed(error => throw new Exception($"命令行格式错误!"))
                .WithParsed(options => {
                    Options = options;
                });
        }
    }
}
