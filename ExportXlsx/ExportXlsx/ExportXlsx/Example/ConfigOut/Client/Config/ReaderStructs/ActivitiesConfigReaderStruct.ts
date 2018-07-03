/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class ActivitiesConfigReaderStruct extends CsvConfigRender<    ActivitiesConfig      >
	{
		path = "Activities";


        ParseCsv(csv: string[] )
        {
			let config = new ActivitiesConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.start_type = csvGetInt(csv,  this.GetHeadIndex(  "start_type"  )   );
			config.start = csvGetInt(csv,  this.GetHeadIndex(  "start"  )   );

			


			this.addConfig(config);
        }
	}
}