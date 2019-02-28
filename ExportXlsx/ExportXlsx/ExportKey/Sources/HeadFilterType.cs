using System;
using System.Collections.Generic;
using System.Text;


/** 导出列过滤类型 */
public class HeadFilterType
{
    public static int SERVER = 1;
    public static int CLIENT = 2;
    public static int ALL = 3;

    public static bool isExport(int filterType)
    {
        if (!Setting.Options.hasHeadFilterLine)
            return true;


        if (Setting.Options.exportHeadFilterType == 0)
            return true;

        if (Setting.Options.exportHeadFilterType == HeadFilterType.ALL && filterType >= SERVER && filterType <= ALL)
            return true;


        if (filterType == HeadFilterType.ALL || filterType == Setting.Options.exportHeadFilterType)
            return true;

        return false;
    }
}
