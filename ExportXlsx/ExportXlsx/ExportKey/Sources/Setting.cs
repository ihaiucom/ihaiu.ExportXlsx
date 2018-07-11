using CommandLine;
using System;
using System.IO;


public class Setting
{
    public static StartOptions Options { get; set; }
    public static OptionList list = new OptionList();

    public static void Init(string[] args)
    {
        bool useSetting = args.Length == 0;
        foreach (string op in args)
        {
            if (op.StartsWith("--setting"))
            {
                useSetting = true;
                break;
            }
        }

        Parse(args);

        if(!File.Exists(Options.setting))
        {
            list.Save(Options.setting);
        }

        if(useSetting)
        {
            list = OptionList.Load(Options.setting);
        }
    }


    public static void Parse(string[] args)
    {
        Parser.Default.ParseArguments<StartOptions>(args)
            .WithNotParsed(error => throw new Exception($"命令行格式错误!"))
            .WithParsed(options =>
            {
                Options = options;
            });
    }


}