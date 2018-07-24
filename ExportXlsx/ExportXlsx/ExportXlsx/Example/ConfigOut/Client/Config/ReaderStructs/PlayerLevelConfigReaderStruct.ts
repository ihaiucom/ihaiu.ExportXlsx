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


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.fans = csvGetInt(csv,  this.GetHeadIndex(  "fans"  )   );
			config.story =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "story"  )   )   );
			config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
			config.order_qua =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "order_qua"  )   )   );
			config.order_num = csvGetInt(csv,  this.GetHeadIndex(  "order_num"  )   );
			config.train_max = csvGetInt(csv,  this.GetHeadIndex(  "train_max"  )   );
			config.train_count = csvGetInt(csv,  this.GetHeadIndex(  "train_count"  )   );
			config.actor_max = csvGetInt(csv,  this.GetHeadIndex(  "actor_max"  )   );
			config.actor_count = csvGetInt(csv,  this.GetHeadIndex(  "actor_count"  )   );
			config.hide_max = csvGetInt(csv,  this.GetHeadIndex(  "hide_max"  )   );
			config.hide_count = csvGetInt(csv,  this.GetHeadIndex(  "hide_count"  )   );
			config.day_max = csvGetInt(csv,  this.GetHeadIndex(  "day_max"  )   );
			config.day = csvGetInt(csv,  this.GetHeadIndex(  "day"  )   );
			config.meeting_cd = csvGetInt(csv,  this.GetHeadIndex(  "meeting_cd"  )   );
			config.cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );

			


			this.addConfig(config);
        }
	}
}