/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class ActorLoyaltyConfigReaderStruct extends CsvConfigRender<    ActorLoyaltyConfig      >
	{
		path = "ActorLoyalty";


        ParseCsv(csv: string[] )
        {
			let config = new ActorLoyaltyConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.lv = csvGetInt(csv,  this.GetHeadIndex(  "lv"  )   );
			config.exp = csvGetInt(csv,  this.GetHeadIndex(  "exp"  )   );
			config.max_lv = csvGetInt(csv,  this.GetHeadIndex(  "max_lv"  )   );
			config.cn_tips = csvGetString(csv,  this.GetHeadIndex(  "cn_tips"  )   );


			this.addConfig(config);
        }
	}
}