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
            xlsxManager.LoadAllTable();
            xlsxManager.ExportTsAll();

            Console.WriteLine("完成!");

            Console.Read();
        }
    }
}
