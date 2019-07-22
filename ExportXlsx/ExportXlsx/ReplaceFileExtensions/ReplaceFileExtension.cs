using System;
using System.Collections.Generic;
using System.IO;
using System.Text;


public static class ReplaceFileExtension
{
    public static void Do(string src, string dest, bool overwrite = true, string srcExt=".as", string destExt=".ts")
    {
        if (Directory.Exists(src))
        {
            DoDirectory(src, dest, overwrite, srcExt, destExt);
        }
        else if (File.Exists(src))
        {

            string srcFileExt = Path.GetExtension(src);
            if (srcFileExt.ToLower() == srcExt.ToLower())
            {
                dest = PathHelper.ChangeExtension(dest, destExt);
                DoFile(src, dest, overwrite);
            }

        }
    }


    private static void DoFile(string src, string dest, bool overwrite = true)
    {
        if (File.Exists(src))
        {
            if (overwrite)
            {
                if (File.Exists(dest))
                {
                    File.Delete(dest);
                }
            }
            else
            {
                if (File.Exists(dest))
                {
                    return;
                }
            }
            PathHelper.CheckPath(dest);
            File.Copy(src, dest, overwrite);
        }
    }

    public static void DoDirectory(string srcPath, string destPath, bool overwrite = true, string srcExt = ".as", string destExt = ".ts")
    {
        try
        {
            DirectoryInfo dir = new DirectoryInfo(srcPath);
            FileSystemInfo[] fileinfo = dir.GetFileSystemInfos();  //获取目录下（不包含子目录）的文件和子目录
            foreach (FileSystemInfo i in fileinfo)
            {
                if (i is DirectoryInfo)     //判断是否文件夹
                {
                    if (!Directory.Exists(destPath + "/" + i.Name))
                    {
                        Directory.CreateDirectory(destPath + "/" + i.Name);   //目标目录下不存在此文件夹即创建子文件夹
                    }
                    DoDirectory(i.FullName, destPath + "/" + i.Name, overwrite, srcExt, destExt);    //递归调用复制子文件夹
                }
                else
                {
                    string dest = destPath + "/" + i.Name;
                    string srcFileExt = Path.GetExtension(i.FullName);
                    if(srcFileExt.ToLower() == srcExt.ToLower())
                    {
                        dest = PathHelper.ChangeExtension(dest, destExt);
                        DoFile(i.FullName, dest, overwrite); //不是文件夹即复制文件，true表示可以覆盖同名文件
                    }
                }
            }
        }
        catch (Exception e)
        {
            Console.WriteLine($"拷贝目录出错 srcPath={srcPath}, destPath={destPath}" + e.ToString());
        }
    }
}