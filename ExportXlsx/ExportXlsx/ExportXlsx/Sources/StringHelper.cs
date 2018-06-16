using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

static class  StringHelper
{
    public static string FirstCharToUpper(this string input)
    {
        if (String.IsNullOrEmpty(input))
            throw new ArgumentException("ARGH!");
        return input.First().ToString().ToUpper() + input.Substring(1);
    }

    public static string FirstCharToLower(this string input)
    {
        if (String.IsNullOrEmpty(input))
            throw new ArgumentException("ARGH!");
        return input.First().ToString().ToLower() + input.Substring(1);
    }
}