using System;
using System.Text;
using System.IO;

namespace Remove
{
    class Program
    {
        static void Main(string[] args)
        {

            //注册EncodeProvider
            //Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

            if(!Setting.Init(args))
            {
                return;
            }

            string path = Setting.Options.path;

            bool result = false;
            
            if(File.Exists(path))
            {
                File.Delete(path);
                result = true;
            }

            if(Directory.Exists(path))
            {
                Directory.Delete(path, true);
                result = true;
            }

            if(!result)
            {
                Console.WriteLine("不存在该文件或者目录 " + path);
                if (!Setting.Options.autoEnd)
                    Console.Read();
                return;
            }



            Console.WriteLine("完成");

            if (!Setting.Options.autoEnd)
                Console.Read();
        }
    }
}
