using System;
using System.Collections.Generic;
using System.Text;

namespace ExportXlsx.Sources
{
    public class OutPaths
    {
        public class Client
        {
            public static string ConfigStructTeamplate
            {
                get
                {
                    return Setting.Options.outDir + "/Client/Config/ConfigStructs/{0}.ts";
                }
            }

            public static string ConfigTemplate
            {
                get
                {
                    return Setting.Options.outDir + "/Client/Config/ConfigExtends/{0}.ts";
                }
            }

            public static string ConfigReaderStructTemplate
            {
                get
                {
                    return Setting.Options.outDir + "/Client/Config/ReaderStructs/{0}.ts";
                }
            }

            public static string ConfigReaderTemplate
            {
                get
                {
                    return Setting.Options.outDir + "/Client/Config/ReaderExtends/{0}.ts";
                }
            }

            public static string ConfigManagerListTemplate
            {
                get
                {
                    return Setting.Options.outDir + "/Client/Config/ConfigManagerList.ts";
                }
            }

            public static string ConfigIncludesTemplate
            {
                get
                {
                    return Setting.Options.outDir + "/Client/Config/ConfigIncludes.ts";
                }
            }
        }

        public class ClientImportJsonTS
        {

            public static string Root
            {
                get
                {
                    return Setting.Options.outDir + "/ClientImportJsonTS/Config/";
                }
            }

            public static string ConfigStructTeamplate
            {
                get
                {
                    return Root + "ConfigStructs/{0}.ts";
                }
            }

            public static string ConfigTemplate
            {
                get
                {
                    return Root + "ConfigExtends/{0}.ts";
                }
            }

            public static string ConfigReaderStructTemplate
            {
                get
                {
                    return Root + "ReaderStructs/{0}.ts";
                }
            }

            public static string ConfigReaderTemplate
            {
                get
                {
                    return Root + "ReaderExtends/{0}.ts";
                }
            }

            public static string ConfigManagerListTemplate
            {
                get
                {
                    return Root + "ConfigManagerList.ts";
                }
            }

            public static string ConfigIncludesTemplate
            {
                get
                {
                    return Root + "ConfigIncludes.ts";
                }
            }
        }

        public class Server
        {
            public static string ConfigTemplate
            {
                get
                {
                    return Setting.Options.outDir + "/Server/Config/{0}.ts";
                }
            }


            public static string DTTemplate
            {
                get
                {
                    return Setting.Options.outDir + "/Server/Config/{0}.ts";
                }
            }
        }
    }
}
