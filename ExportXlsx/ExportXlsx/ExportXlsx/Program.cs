using System;
using System.IO;
using System.Text;

namespace ExportXlsx.Sources
{
    class Program
    {
        static void Main(string[] args)
        {
            //注册EncodeProvider
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);


            Setting.Init(args);



            XlsxManager xlsxManager = new XlsxManager();
            xlsxManager.LoadDTStructs();
            xlsxManager.LoadIgnore();
            xlsxManager.LoadAllTable();
            xlsxManager.ExportTsAll();
            xlsxManager.ExportCsvs();
            xlsxManager.ExportJsons();

            Console.WriteLine("完成!");

            if(!Setting.Options.autoEnd)
                Console.Read();
        }
    }
}
