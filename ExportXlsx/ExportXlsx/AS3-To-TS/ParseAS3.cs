using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

public class ParseAS3
{
    public string code;
    public string tsCode;
    public string clsName;
    public List<string> varList = new List<string>();
    public List<string> functionList = new List<string>();
    public List<string> staticFunctionList = new List<string>();
    public List<string> staticVarList = new List<string>();
    public List<string> staticGetList = new List<string>();
    public List<string> staticSetList = new List<string>();
    public void SetCode(string code)
    {
        this.code = code;
    }

    public void Parse()
    {
        this.parseClass();
        this.parseStaticVar();
        this.parseStaticConst();
        this.parseStaticGetSet();
        this.parseStaticFunction();
        this.parseFunction();
        this.parseVar();
    }

    public string ToTs()
    {
        tsCode = code;
        replaceConstructor();
       // replaceVar();
        replaceFunction();
        replaceStaticVar();

        return tsCode;
    }


    public void replaceStaticVar()
    {

        if (string.IsNullOrEmpty(clsName))
            return;

        foreach (var item in staticVarList)
        {

            string pattern = $@"([^\.])({item}\s*)([=.);><|&%[,\]])";
            string replacement = $"$1{clsName}.$2$3";

            tsCode = Regex.Replace(tsCode, pattern, replacement);
        }
    }

    public void replaceConstructor()
    {
        if (string.IsNullOrEmpty(clsName))
            return;


        string pattern = $@"public\s+function\s+{clsName}\s*\(";
        string replacement = "constructor( ";
        tsCode = Regex.Replace(tsCode, pattern, replacement);
    }

    public void replaceVar()
    {
        if (string.IsNullOrEmpty(clsName))
            return;

        foreach (var item in varList)
        {

            string pattern = $@"([^\.])({item}\s*)([=.);><|&%[,\]])";
            string replacement = "$1this.$2$3";

            tsCode = Regex.Replace(tsCode, pattern, replacement);
        }
    }

    public void replaceStaticFunction()
    {
        if (string.IsNullOrEmpty(clsName))
            return;

        foreach (var item in staticFunctionList)
        {
            string pattern = $@"([^\.])({item})(\s*\(.*\);)";
            string replacement = $"$1{clsName}.$2$3 ";
            tsCode = Regex.Replace(tsCode, pattern, replacement);
        }
    }

    public void replaceFunction()
    {
        foreach(var item in functionList)
        {
            string pattern = $@"([^\.])({item})(\s*\(.*\);)";
            string replacement = $"$1this.$2$3 ";
            tsCode = Regex.Replace(tsCode, pattern, replacement);
        }
    }

    public void parseFunction()
    {
        string pattern = @"\s+function\s+([a-zA-Z0-9_$]+)\s*";

        MatchCollection matchCollection = Regex.Matches(code, pattern, RegexOptions.Multiline);


        foreach (Match match in matchCollection)
        {
            string itemName = match.Groups[1].Value.ToString();
            if (itemName == "get" || itemName == "set" || itemName == clsName)
            {
                continue;
            }
            functionList.Add(itemName);
            Console.WriteLine("  function " + itemName);
        }
    }

    public void parseStaticFunction()
    {
        string pattern = @"\s*static[a-z\s]+function\s+([a-zA-Z0-9_$]+)\s*";

        MatchCollection matchCollection = Regex.Matches(code, pattern, RegexOptions.Multiline);


        foreach (Match match in matchCollection)
        {
            string itemName = match.Groups[1].Value.ToString();
            if(itemName == "get" || itemName == "set" || itemName == clsName)
            {
                continue;
            }
            staticFunctionList.Add(itemName);
            Console.WriteLine(" static function " + itemName);
        }
    }

    public void parseStaticGetSet()
    {
        string pattern = @"\s*static[a-z\s]+function\s+get\s+([a-zA-Z0-9_$]+)\s*";

        MatchCollection matchCollection = Regex.Matches(code, pattern, RegexOptions.Multiline);


        foreach (Match match in matchCollection)
        {
            string itemName = match.Groups[1].Value.ToString();
            staticGetList.Add(itemName);
            Console.WriteLine(" static get " + itemName);
        }


        pattern = @"\s*static[a-z\s]+function\s+set\s+([a-zA-Z0-9_$]+)\s*";

        matchCollection = Regex.Matches(code, pattern, RegexOptions.Multiline);


        foreach (Match match in matchCollection)
        {
            string itemName = match.Groups[1].Value.ToString();
            staticSetList.Add(itemName);
            Console.WriteLine(" static set " + itemName);
        }

    }


    public void parseVar()
    {
        string pattern = @"\s+var\s+([a-zA-Z0-9_$]+)\s*";

        MatchCollection matchCollection = Regex.Matches(code, pattern, RegexOptions.Multiline);


        foreach (Match match in matchCollection)
        {
            if (match.Groups[1].Value.ToString() == "_instance")
            {
                continue;
            }
            string itemName = match.Groups[1].Value.ToString();
            if(staticVarList.Contains(itemName))
            {
                continue;
            }
            varList.Add(itemName);
            Console.WriteLine(" var " + itemName);
        }

    }


    public void parseStaticVar()
    {
        string pattern = @"\s*static\s+var\s+([a-zA-Z0-9_$]+)\s*";

        MatchCollection matchCollection = Regex.Matches(code, pattern, RegexOptions.Multiline);


        foreach (Match match in matchCollection)
        {
            if(match.Groups[1].Value.ToString() == "_instance")
            {
                continue;
            }
            string itemName = match.Groups[1].Value.ToString();
            staticVarList.Add(itemName);
            Console.WriteLine(" static var " + itemName);
        }

    }


    public void parseStaticConst()
    {
        string pattern = @"\s*static\s+const\s+([a-zA-Z0-9_$]+)\s*";

        MatchCollection matchCollection = Regex.Matches(code, pattern, RegexOptions.Multiline);


        foreach (Match match in matchCollection)
        {
            if (match.Groups[1].Value.ToString() == "_instance")
            {
                continue;
            }
            string itemName = match.Groups[1].Value.ToString();
            staticVarList.Add(itemName);
            Console.WriteLine(" static const " + itemName);
        }

    }

    public void parseClass()
    {
        string pattern = @"class\s+([a-zA-Z0-9_$]+)\s*";

        MatchCollection matchCollection = Regex.Matches(code, pattern, RegexOptions.Multiline);


        foreach (Match match in matchCollection)
        {
            clsName = match.Groups[1].Value.ToString();
        }

        Console.WriteLine("clsName=" + clsName);

    }


}