using CommandLine;
using System;
using System.IO;


public class Setting
{
    public static StartOptions Options { get; set; }

    public static bool Init(string[] args)
    {
        bool result = true;
        if(args.Length  == 0)
        {
            PrintHelp();
            result = false;
        }


        Parse(args);

        if(string.IsNullOrEmpty(Options.path))
        {
            PrintHelp();
            result = false;
        }
        return result;
    }

    public static void PrintHelp()
    {
        Console.WriteLine("--path string  Required 要删除的路径");
        Console.WriteLine("--autoEnd bool  是否自动关闭窗口");
        if (!Options.autoEnd)
            Console.ReadKey();
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