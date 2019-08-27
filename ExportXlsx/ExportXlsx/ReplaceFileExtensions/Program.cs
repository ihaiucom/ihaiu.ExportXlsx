using System;

namespace ReplaceFileExtensions
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args == null || args.Length < 4)
            {
                Console.WriteLine("参数不对");
                Console.WriteLine("srcDir destDir srcExt destExt");
                return;
            }

            //string srcDir = "E:/zengfeng/WXJJSG-Demo/client/as2ts";
            //string destDir = "E:/zengfeng/WXJJSG-Demo/client/as2ts2";
            string srcDir = args[0];
            string destDir = args[1];
            string srcExt = args[2];
            string destExt = args[3];
            bool isRemoveSrcFile = args.Length >= 4 ? args[4].ToLower() == "true" : false;
            ReplaceFileExtension.DoDirectory(srcDir, destDir, true, srcExt, destExt, isRemoveSrcFile);
        }
    }
}
