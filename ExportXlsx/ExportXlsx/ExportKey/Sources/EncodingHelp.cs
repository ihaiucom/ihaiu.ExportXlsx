using System;
using System.Collections.Generic;
using System.Text;


public static class EncodingHelp
{
    public static string GB2312ToUtf8(this string str)
    {
        Encoding gb2312 = Encoding.GetEncoding("GB2312");
        byte[] gb = gb2312.GetBytes(str);
        gb = Encoding.Convert(gb2312, Encoding.UTF8, gb);
        return Encoding.UTF8.GetString(gb);
    }

    public static string Utf8ToGB2312(this string text)
    {
        Encoding gb2312 = Encoding.GetEncoding("GB2312");
        byte[] bs = Encoding.UTF8.GetBytes(text);
        bs = Encoding.Convert(Encoding.UTF8, gb2312, bs);
        return gb2312.GetString(bs);

    }

}