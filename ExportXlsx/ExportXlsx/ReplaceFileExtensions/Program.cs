using System;

namespace ReplaceFileExtensions
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            string srcDir = "E:/zengfeng/WXJJSG-Demo/client/as2ts";
            string destDir = "E:/zengfeng/WXJJSG-Demo/client/as2ts2";
            ReplaceFileExtension.DoDirectory(srcDir, destDir);
        }
    }
}
