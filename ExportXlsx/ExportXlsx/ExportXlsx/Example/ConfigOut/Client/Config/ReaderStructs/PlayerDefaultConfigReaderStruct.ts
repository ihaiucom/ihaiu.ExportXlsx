/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class PlayerDefaultConfigReaderStruct extends CsvConfigRender<    PlayerDefaultConfig      >
	{
		path = "PlayerDefault";


        ParseCsv(csv: string[] )
        {
			let config = new PlayerDefaultConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.actors =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "actors"  )   )   );
			config.items =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "items"  )   )   );

			


			this.addConfig(config);
        }
	}
}