using System;
using System.Text;

class Program
{
    static void Main(string[] args)
    {
        //注册EncodeProvider
        Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

        Setting.Init(args);

        foreach(OptionItem item in Setting.list.enableoverwrites)
        {
            CopyCommand.Copy(item.src, item.dst, true);
        }

        foreach (OptionItem item in Setting.list.disableoverwrites)
        {
            CopyCommand.Copy(item.src, item.dst, false);
        }

        Console.WriteLine("完成");

        if (!Setting.Options.autoEnd)
            Console.Read();
    }
}