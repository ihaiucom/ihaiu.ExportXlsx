/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class BlockLevelConfigReaderStruct extends CsvConfigRender<    BlockLevelConfig      >
	{
		path = "BlockLevel";


        ParseCsv(csv: string[] )
        {
			let config = new BlockLevelConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.pic = csvGetInt(csv,  this.GetHeadIndex(  "pic"  )   );
			config.upgrade_req = csvGetInt(csv,  this.GetHeadIndex(  "upgrade_req"  )   );
			config.upgrade_menu =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "upgrade_menu"  )   )   );
			config.upgrade_reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "upgrade_reward"  )   )   );
			config.daily_reward =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "daily_reward"  )   )   );
			config.cinema =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "cinema"  )   )   );
			config.level_multiple = csvGetInt(csv,  this.GetHeadIndex(  "level_multiple"  )   );
			config.level_con = csvGetInt(csv,  this.GetHeadIndex(  "level_con"  )   );
			config.theater_level_con = csvGetInt(csv,  this.GetHeadIndex(  "theater_level_con"  )   );
			config.good = csvGetInt(csv,  this.GetHeadIndex(  "good"  )   );
			config.big_sell = csvGetInt(csv,  this.GetHeadIndex(  "big_sell"  )   );
			config.great_sell = csvGetInt(csv,  this.GetHeadIndex(  "great_sell"  )   );
			config.myth_sell = csvGetInt(csv,  this.GetHeadIndex(  "myth_sell"  )   );
			config.marvel_sell = csvGetInt(csv,  this.GetHeadIndex(  "marvel_sell"  )   );
			config.zh_cn_current_msg =  toStringArray(       csvGetString(csv,  this.GetHeadIndex(  "zh_cn_current_msg"  )   )   );
			config.zh_cn_next_msg =  toStringArray(       csvGetString(csv,  this.GetHeadIndex(  "zh_cn_next_msg"  )   )   );

			


			this.addConfig(config);
        }
	}
}