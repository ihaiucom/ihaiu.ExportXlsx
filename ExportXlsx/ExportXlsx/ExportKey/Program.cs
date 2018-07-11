using ExportXlsx.Sources;
using Microsoft.International.Converters.PinYinConverter;
using System;
using System.Text;
using System.Text.RegularExpressions;

class Program
{
    static void Main(string[] args)
    {

        //注册EncodeProvider
        Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

        //foreach (EncodingInfo item in System.Text.Encoding.GetEncodings())
        //{

        //    Console.WriteLine($"  {item.CodePage}   {item.DisplayName}   {item.Name} ");
        //}

        //string keyid = $@"GlobalKey\.KEY_100(?=[,\s\t\);\.\+\-\*\/]+?)";
        //        //string keyid = $@"GlobalKey\.KEY_100";
        //        string str = @"GlobalConfig.getValue(GlobalKey.KEY_100.tostring())
        //GlobalConfig.getValue(GlobalKey.KEY_100_Hello) 
        //";
        //        var content = Regex.Replace(str, keyid, "GlobalKey.KEY_100_LALA");
        //        Console.WriteLine(content);

        //        Console.Read();

        //        return;



        //ChineseChar cc = new ChineseChar('蜻');
        //foreach (var item in cc.Pinyins)
        //{
        //    Console.WriteLine(item);
        //}
        //string str = "KEY_99 奥斯卡比赛单次大卖奖励道具";
        //Console.WriteLine($"str = {str}");
        //str = str.Utf8ToGB2312();
        //Console.WriteLine($"str = {str}");



        //string quanping = PinYinConverter.Get(str);
        //string zimu = PinYinConverter.GetFirst(str);

        //Console.WriteLine($"quanping = {quanping}");
        //Console.WriteLine($"zimu = {zimu}");
        //Console.WriteLine($"");

        //PingYinModel pym = PinYinConverterHelp.GetTotalPingYin(str);
        //Console.WriteLine($"TotalPingYin = {String.Join(' ', pym.TotalPingYin.ToArray())}");
        //Console.WriteLine($"FirstPingYin = {String.Join(' ', pym.FirstPingYin.ToArray())}");
        //Console.WriteLine($"FullPing = {PinYinConverterHelp.GetFullPing(str, string.Empty)}");

        //Console.Read();
        //return;

        Setting.Init(args);


        foreach (OptionItem item in Setting.list.list)
        {
            TableReader tableReader = new TableReader();
            tableReader.option = item;
            tableReader.path = item.xlsx;
            tableReader.Load();
            tableReader.GenerateEmptyKey();
            tableReader.SaveExcel();
            tableReader.SaveCode();
            tableReader.ReplaceOldCode();
        }


        Console.WriteLine("完成");

        if (!Setting.Options.autoEnd)
            Console.Read();
    }
}