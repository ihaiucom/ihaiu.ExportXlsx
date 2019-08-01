using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;

public class AsToTs
{
    public static void Do(string srcPath, string destPath, bool overwrite = true)
    {
        if(!File.Exists(srcPath))
        {
            return;
        }

        if (File.Exists(destPath))
        {
            if(!overwrite)
            {
                return;
            }
            File.Delete(destPath);
        }
        Console.WriteLine();
        Console.WriteLine(srcPath);

        string code = File.ReadAllText(srcPath);
        ParseAS3 p = new ParseAS3();
        p.SetCode(code);
        p.Parse();
        code = p.ToTs();

        // package
        code = replaceNameSpace(code);
        // import
        code = replaceImport(code);
        // class 
        code = replaceClass(code);
        // static const
        code = replaceStaticConst(code);
        // static var
        code = replaceStaticVar(code);
        // var
        code = replacePrivateVar(code);
        code = replaceProtectedVar(code);
        code = replacePublicVar(code);
        //function
        code = replacePublicFunction(code);
        code = replaceProtectedFunction(code);
        code = replacePrivateFunction(code);
        code = replaceInternalFunction(code);
        // static function
        code = replacePublicStaticFunction(code);
        code = replaceProtectedStaticFunction(code);
        code = replacePrivateStaticFunction(code);
        code = replaceInternalStaticFunction(code);

        //override
        code = replaceOverrideFunction(code);

        
        // m_xxx
        code = replaceMVar(code);
        code = replaceMVar(code);
        // :Vector.<int>;
        code = replaceVector(code);
        // Array
        code = replaceArray(code);
        //for each
        code = replaceForEach(code);
        //Number
        code = replaceNumber(code);

        //function
        code = replaceFunction(code);

        


        if (File.Exists(destPath))
        {
            File.Delete(destPath);
        }
        File.WriteAllText(destPath, code);
    }


    public static string replaceNumber(string code)
    {
        string pattern = @":Number\s*;";
        string replacement = ":number;";
        code = Regex.Replace(code, pattern, replacement);



        pattern = @":String\s*;";
        replacement = ":string;";
        code = Regex.Replace(code, pattern, replacement);


        pattern = @":\s*Boolean\s*([;),]=)";
        replacement = ":boolean$1";
        code = Regex.Replace(code, pattern, replacement);


        pattern = @":\s*String\s*([;),]=)";
        replacement = ":string$1";
        code = Regex.Replace(code, pattern, replacement);

        pattern = @":\s*Number\s*([;),]=)";
        replacement = ":number$1";
        code = Regex.Replace(code, pattern, replacement);

        pattern = @":\s*Boolean\s*";
        replacement = ":boolean";
        code = Regex.Replace(code, pattern, replacement);


        pattern = @"<Boolean>";
        replacement = "<boolean>";
        code = Regex.Replace(code, pattern, replacement);

        pattern = @"<String>";
        replacement = "<string>";
        code = Regex.Replace(code, pattern, replacement);

        pattern = @"<Number>";
        replacement = "<number>";
        code = Regex.Replace(code, pattern, replacement);



        pattern = @":Array\s*=";
        replacement = ":any[] =";
        code = Regex.Replace(code, pattern, replacement);

        pattern = @":Array\s*;";
        replacement = ":any[] ;";
        code = Regex.Replace(code, pattern, replacement);


        pattern = @"set\s+([a-zA-Z0-9_$]+)(\(.*\))\s*:\s*void";
        replacement = "set $1$2";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }


    public static string replaceForEach(string code)
    {
        string pattern = @"for\s+each\s*\(";
        string replacement = "for(";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }


    public static string replaceArray(string code)
    {
        string pattern = @":Array\s*;";
        string replacement = ":any[];";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }

    public static string replaceVector(string code)
    {
        string pattern = @":Vector\.\<([a-zA-Z0-9_$]+)\>(\s*[;,])";
        string replacement = ":$1[]$2";
        code = Regex.Replace(code, pattern, replacement);


         pattern = @"new\s+Vector\.\<([a-zA-Z0-9_$]+)\>\s*;";
         replacement = "new Array<$1>();";
        code = Regex.Replace(code, pattern, replacement);



        pattern = @"new\s+Vector\.\<([a-zA-Z0-9_$]+)\>\s*\(([a-zA-Z0-9_$]+)\s*\,.*\)\s*;";
        replacement = "new Array<$1>($2);";
        code = Regex.Replace(code, pattern, replacement);


        return code;
    }


    public static string replaceMVar(string code)
    {
        string pattern = @"([^\.])(m_[a-zA-Z0-9_$]+\s*)([=.);><|&%[,\]\s])";
        string replacement = "$1this.$2$3";
        code = Regex.Replace(code, pattern, replacement);



        return code;
    }


    public static string replaceFunction(string code)
    {
        string pattern = @"\sfunction\s";
        string replacement = "  ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }


    public static string replacePublicStaticFunction(string code)
    {
        string pattern = @"public\s+static\s+function\s";
        string replacement = "public ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }

    public static string replaceInternalStaticFunction(string code)
    {
        string pattern = @"internal\s+static\s+function\s";
        string replacement = "static ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }

    public static string replaceProtectedStaticFunction(string code)
    {
        string pattern = @"protected\s+static\s+function\s";
        string replacement = "protected static ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }

    public static string replacePrivateStaticFunction(string code)
    {
        string pattern = @"private\s+static\s+function\s";
        string replacement = "private static ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }




    public static string replaceOverrideFunction(string code)
    {
        string pattern = @"(\s+)override\s+";
        string replacement = "$1 ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }





    public static string replacePublicFunction(string code)
    {
        string pattern = @"public\s+function\s";
        string replacement = "public ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }

    public static string replaceInternalFunction(string code)
    {
        string pattern = @"internal\s+function\s";
        string replacement = " ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }

    public static string replaceProtectedFunction(string code)
    {
        string pattern = @"protected\s+function\s";
        string replacement = "protected ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }

    public static string replacePrivateFunction(string code)
    {
        string pattern = @"private\s+function\s";
        string replacement = "private ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }


    public static string replacePublicVar(string code)
    {
        string pattern = @"public\s+var\s";
        string replacement = "public ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }

    public static string replaceProtectedVar(string code)
    {
        string pattern = @"protected\s+var\s";
        string replacement = "protected ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }

    public static string replacePrivateVar(string code)
    {
        string pattern = @"private\s+var\s";
        string replacement = "private ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }

    public static string replaceStaticVar(string code)
    {
        string pattern = @"\s+static\s+var\s";
        string replacement = " static ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }


    public static string replaceStaticConst(string code)
    {
        string pattern = @"\s+static\s+const\s";
        string replacement = " static ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }


    public static string replaceClass(string code)
    {
        string pattern = @"public\s+class\s+";
        string replacement = "export class ";
        code = Regex.Replace(code, pattern, replacement);


         pattern = @"public\s+final\s+class\s+";
         replacement = "export class ";
        code = Regex.Replace(code, pattern, replacement);


        pattern = @"public\s+interface\s+";
        replacement = "export interface ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }

    public static string replaceNameSpace(string code)
    {
        string pattern = @"(package)\s+";
        string replacement = "namespace ";
        code = Regex.Replace(code, pattern, replacement);
        return code;
    }

    public static string replaceImport(string code)
    {
        string pattern = @"import\s+([a-zA-Z0-9_$]+)\s*;";
        string replacement = "import $1=$1;";
        code = Regex.Replace(code, pattern, replacement);


        pattern = @"import\s+([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\s*;";
        replacement = "import $2=$1.$2;";
        code = Regex.Replace(code, pattern, replacement);



        pattern = @"import\s+([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\s*;";
        replacement = "import $3=$1.$2.$3;";
        code = Regex.Replace(code, pattern, replacement);

        pattern = @"import\s+([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\s*;";
        replacement = "import $4=$1.$2.$3.$4;";
        code = Regex.Replace(code, pattern, replacement);


        pattern = @"import\s+([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\s*;";
        replacement = "import $5=$1.$2.$3.$4.$5;";
        code = Regex.Replace(code, pattern, replacement);


        pattern = @"import\s+([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\s*;";
        replacement = "import $6=$1.$2.$3.$4.$5.$6;";
        code = Regex.Replace(code, pattern, replacement);


        pattern = @"import\s+([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\s*;";
        replacement = "import $7=$1.$2.$3.$4.$5.$6.$7;";
        code = Regex.Replace(code, pattern, replacement);


        pattern = @"import\s+([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\.([a-zA-Z0-9_$]+)\s*;";
        replacement = "import $8=$1.$2.$3.$4.$5.$6.$7.$8;";
        code = Regex.Replace(code, pattern, replacement);

        //MatchCollection matchCollection = Regex.Matches(code, pattern, RegexOptions.Multiline);

        //foreach (Match match in matchCollection)
        //{
        //    Console.WriteLine(match.Value);
        //}
        return code;
    }
}