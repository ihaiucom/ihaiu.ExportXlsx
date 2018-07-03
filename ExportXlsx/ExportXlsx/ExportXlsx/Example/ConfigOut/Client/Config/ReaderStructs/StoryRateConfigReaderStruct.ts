/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class StoryRateConfigReaderStruct extends CsvConfigRender<    StoryRateConfig      >
	{
		path = "StoryRate";


        ParseCsv(csv: string[] )
        {
			let config = new StoryRateConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.rate = csvGetInt(csv,  this.GetHeadIndex(  "rate"  )   );

			


			this.addConfig(config);
        }
	}
}