using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace ExportXlsx.Sources
{
    public class DataField
    {
        public string   field;
        public string   cn;
        public string   typeName;
        public int      filterType;
        public int      index;

        // 是否导出该列
        public bool isExport
        {
            get
            {
                return HeadFilterType.isExport(filterType);
            }
        }

        static Regex EnableRegex = new Regex("^[A-Za-z_]+[A-Za-z0-9_]*");

        public bool fieldNameIsEnable
        {
            get
            {
                return EnableRegex.IsMatch(field);
            }
        }

        public string GetTsTypeImport()
        {

            string name = typeName.Trim().ToLower().Replace("[]", "");
            switch (name)
            {
                case "string":
                case "int64":
                case "int":
                case "float":
                case "double":
                case "boolean":
                case "bool":

                case "bit":
                case "byte":
                case "int8":
                case "int32":
                case "uint32":
                case "uint64":
                case "float32":
                case "float64":
                    return null;
            }

            name = typeName.Trim().Replace(" ", "").Replace("[]", "");
            return name;
        }

        public string GetTsTypeImportPath(string name = null, string configPath = null)
        {
            if(string.IsNullOrEmpty(name))
            {
                name = GetTsTypeImport();
            }

            if (string.IsNullOrEmpty(configPath))
            {
                configPath = OutPaths.Client.ConfigTemplate;
            }

            string path = string.Format(configPath, name);

            return path;
        }

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
                case "bit":
                case "byte":
                case "int8":
                case "int32":
                case "int64":
                case "uint32":
                case "uint64":
                case "int":
                case "float":
                case "float32":
                case "float64":
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
