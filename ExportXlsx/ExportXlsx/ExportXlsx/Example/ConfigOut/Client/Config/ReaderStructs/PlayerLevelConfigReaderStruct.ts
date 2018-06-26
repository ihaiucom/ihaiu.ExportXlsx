/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class PlayerLevelConfigReaderStruct extends CsvConfigRender<    PlayerLevelConfig      >
	{
		path = "PlayerLevel";


        ParseCsv(csv: string[] )
        {
			let config = new PlayerLevelConfig();


			config.level = csvGetInt(csv,  this.GetHeadIndex(  "level"  )   );
			config.fans = csvGetInt(csv,  this.GetHeadIndex(  "fans"  )   );
			config.story =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "story"  )   )   );
			config.gold = csvGetInt(csv,  this.GetHeadIndex(  "gold"  )   );
			config.diamond = csvGetInt(csv,  this.GetHeadIndex(  "diamond"  )   );
			config.order_qua =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "order_qua"  )   )   );
			config.order_num = csvGetInt(csv,  this.GetHeadIndex(  "order_num"  )   );
			config.actor_max = csvGetInt(csv,  this.GetHeadIndex(  "actor_max"  )   );


			this.addConfig(config);
        }
	}
}