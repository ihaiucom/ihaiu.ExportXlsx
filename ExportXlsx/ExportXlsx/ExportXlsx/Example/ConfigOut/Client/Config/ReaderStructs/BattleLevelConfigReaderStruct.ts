/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class BattleLevelConfigReaderStruct extends CsvConfigRender<    BattleLevelConfig      >
	{
		path = "BattleLevel";


        ParseCsv(csv: string[] )
        {
			let config = new BattleLevelConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.type_con = csvGetInt(csv,  this.GetHeadIndex(  "type_con"  )   );
			config.tag_con = csvGetInt(csv,  this.GetHeadIndex(  "tag_con"  )   );
			config.character_con = csvGetInt(csv,  this.GetHeadIndex(  "character_con"  )   );

			


			this.addConfig(config);
        }
	}
}