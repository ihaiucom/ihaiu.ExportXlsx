using System;

namespace ReplaceFileExtensions
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            string srcDir = "E:/zengfeng/WXJJSG-Demo/client/as3-to-ts/as3";
            string destDir = "E:/zengfeng/WXJJSG-Demo/client/as3-to-ts/ts";
            ReplaceFileExtension.DoDirectory(srcDir, destDir);

            //            AsToTs.replaceImport(@"	

            //        import ServerData;
            //        import server.ServerData;
            //");

            Console.Read();
        }
    }
}
