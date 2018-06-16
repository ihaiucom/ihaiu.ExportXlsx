using System;
using System.Collections.Generic;
using System.Text;

namespace ExportXlsx.Sources
{
    public class DataField
    {
        public string   field;
        public string   cn;
        public string   typeName;
        public int      index;

        public string GetTsTypeName()
        {
            string name = GetTsTypeName(typeName);
            if(name.EndsWith("[]"))
            {
                return GetTsTypeName(name.Replace("[]", "")) + "[]";
            }
            return name;
        }

        public string GetTsTypeName(string typeName)
        {
            string name = typeName.Trim().ToLower();
            switch (name)
            {
                case "string":
                    return "string";
                case "int64":
                case "int":
                case "float":
                case "double":
                    return "number";
                case "boolean":
                case "bool":
                    return "boolean";
            }

            name = typeName.Trim().Replace(" ", "");
            return name;
        }
    }
}
