/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class GameLevelConfigReaderStruct extends CsvConfigRender<    GameLevelConfig      >
	{
		path = "GameLevel";


        ParseCsv(csv: string[] )
        {
			let config = new GameLevelConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.stall = csvGetInt(csv,  this.GetHeadIndex(  "stall"  )   );
			config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
			config.pre_id = csvGetInt(csv,  this.GetHeadIndex(  "pre_id"  )   );
			config.next_level = csvGetInt(csv,  this.GetHeadIndex(  "next_level"  )   );

			


			this.addConfig(config);
        }
	}
}