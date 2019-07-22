using System;
using System.Collections.Generic;
using System.Text;

namespace ExportXlsx.Sources
{
    public class TemplatingFiles
    {
        public class Client
        {
            public static string ConfigStructTemplates
            {
                get
                {
                    return Setting.Options.templateDir + "/Client/ConfigStructTemplate.txt";
                }
            }

            public static string ConfigTemplate
            {
                get
                {
                    return Setting.Options.templateDir + "/Client/ConfigTemplate.txt";
                }
            }

            public static string ConfigReaderStructTemplate
            {
                get
                {
                    return Setting.Options.templateDir + "/Client/ConfigReaderStructTemplate.txt";
                }
            }

            public static string ConfigReaderTemplate
            {
                get
                {
                    return Setting.Options.templateDir + "/Client/ConfigReaderTemplate.txt";
                }
            }

            public static string ConfigManagerListTemplate
            {
                get
                {
                    return Setting.Options.templateDir + "/Client/ConfigManagerListTemplate.txt";
                }
            }

            public static string ConfigIncludesTemplate
            {
                get
                {
                    return Setting.Options.templateDir + "/Client/ConfigIncludesTemplate.txt";
                }
            }
        }


        public class ClientImportJsonTS
        {

            public static string Root
            {
                get
                {
                    return Setting.Options.templateDir + "/Client-import-json/";
                }
            }

            public static string ConfigStructTemplates
            {
                get
                {
                    return Root + "ConfigStructTemplate.txt";
                }
            }

            public static string ConfigTemplate
            {
                get
                {
                    return Root + "ConfigTemplate.txt";
                }
            }

            public static string ConfigReaderStructTemplate
            {
                get
                {
                    return Root + "ConfigReaderStructTemplate.txt";
                }
            }

            public static string ConfigReaderTemplate
            {
                get
                {
                    return Root + "ConfigReaderTemplate.txt";
                }
            }

            public static string ConfigManagerListTemplate
            {
                get
                {
                    return Root + "ConfigManagerListTemplate.txt";
                }
            }

            public static string ConfigIncludesTemplate
            {
                get
                {
                    return Root + "ConfigIncludesTemplate.txt";
                }
            }
        }

        public class Server
        {
            public static string ConfigTemplate
            {
                get
                {
                    return Setting.Options.templateDir + "/Server/ConfigTemplate.txt";
                }
            }


            public static string DTTemplate
            {
                get
                {
                    return Setting.Options.templateDir + "/Server/DTTemplate.txt";
                }
            }
        }
    }
}
