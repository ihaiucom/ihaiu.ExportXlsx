/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace configs
{
    /// 配置读取器列表
    export class ConfigManagerList
    {
        // 读取器列表
        renders: ConfigRenderInterface[] = [];


        blockWords  : BlockWordsConfigReader = new BlockWordsConfigReader();
        buildingLevel  : BuildingLevelConfigReader = new BuildingLevelConfigReader();
        country  : CountryConfigReader = new CountryConfigReader();
        test  : TestConfigReader = new TestConfigReader();


        // 初始化读取器列表
        initList()
        {

            this.renders.push(this.blockWords);
            this.renders.push(this.buildingLevel);
            this.renders.push(this.country);
            this.renders.push(this.test);
        }
        
    }
}