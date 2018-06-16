namespace configs
{
    /// 配置读取器列表
    export class ConfigManagerList
    {
        // 读取器列表
        renders: ConfigRenderInterface[] = [];


        test  : TestConfigReader = new TestConfigReader();


        // 初始化读取器列表
        initList()
        {

            this.renders.push(this.test:);
        }
        
    }
}