/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
    /// 配置读取器列表
    export class ConfigManagerList
    {
        // 读取器列表
        renders: ConfigRenderInterface[] = [];


        msg  : MsgConfigReader = new MsgConfigReader();


        // 初始化读取器列表
        initList()
        {

            this.renders.push(this.msg);
        }
        
    }
}