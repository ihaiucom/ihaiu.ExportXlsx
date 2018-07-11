using System;
using System.Collections.Generic;
using System.Text;

public class Log
{
    public static void Info(string msg)
    {
        Console.WriteLine(msg);
    }

    public static void Error(string msg)
    {
        Console.WriteLine("[Error] " + msg);
    }
}