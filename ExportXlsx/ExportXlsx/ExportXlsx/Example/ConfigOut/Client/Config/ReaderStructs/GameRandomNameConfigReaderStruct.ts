/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class GameRandomNameConfigReaderStruct extends CsvConfigRender<    GameRandomNameConfig      >
	{
		path = "GameRandomName";


        ParseCsv(csv: string[] )
        {
			let config = new GameRandomNameConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
			config.names =  toStringArray(       csvGetString(csv,  this.GetHeadIndex(  "names"  )   )   );
			config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

			


			this.addConfig(config);
        }
	}
}