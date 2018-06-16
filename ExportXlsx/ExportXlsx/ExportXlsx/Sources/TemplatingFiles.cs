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
