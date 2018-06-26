/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class ActorLevelConfigReaderStruct extends CsvConfigRender<    ActorLevelConfig      >
	{
		path = "ActorLevel";


        ParseCsv(csv: string[] )
        {
			let config = new ActorLevelConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.lv = csvGetInt(csv,  this.GetHeadIndex(  "lv"  )   );
			config.cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
			config.culture = csvGetInt(csv,  this.GetHeadIndex(  "culture"  )   );
			config.assets = csvGetInt(csv,  this.GetHeadIndex(  "assets"  )   );
			config.stamina = csvGetInt(csv,  this.GetHeadIndex(  "stamina"  )   );
			config.paycheck =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "paycheck"  )   )   );
			config.spectacle = csvGetInt(csv,  this.GetHeadIndex(  "spectacle"  )   );
			config.perform = csvGetInt(csv,  this.GetHeadIndex(  "perform"  )   );
			config.plot = csvGetInt(csv,  this.GetHeadIndex(  "plot"  )   );
			config.ary = csvGetInt(csv,  this.GetHeadIndex(  "ary"  )   );
			config.entertainment = csvGetInt(csv,  this.GetHeadIndex(  "entertainment"  )   );
			config.cn_tips = csvGetString(csv,  this.GetHeadIndex(  "cn_tips"  )   );


			this.addConfig(config);
        }
	}
}