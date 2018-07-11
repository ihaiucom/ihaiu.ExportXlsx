using System;
using System.Text;

class Program
{
    static void Main(string[] args)
    {
        //注册EncodeProvider
        Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

        Setting.Init(args);

        string time = DateTime.Now.ToString("yyyy-MM-dd-dddd-HH_mm_ss_fff");
        foreach (OptionItem item in Setting.list.enableoverwrites)
        {
            item.dst = item.dst.Replace("XXXX", time);
            CopyCommand.Copy(item.src, item.dst, true);
        }

        foreach (OptionItem item in Setting.list.disableoverwrites)
        {
            item.dst = item.dst.Replace("XXXX", time);
            CopyCommand.Copy(item.src, item.dst, false);
        }

        foreach (OptionCheckItem item in Setting.list.checks)
        {
            new Checker(item).Run();
        }

        Console.WriteLine("完成");

        if (!Setting.Options.autoEnd)
            Console.Read();
    }
}