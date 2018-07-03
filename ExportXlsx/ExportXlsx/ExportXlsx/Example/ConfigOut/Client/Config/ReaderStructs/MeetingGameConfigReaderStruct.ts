/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MeetingGameConfigReaderStruct extends CsvConfigRender<    MeetingGameConfig      >
	{
		path = "MeetingGame";


        ParseCsv(csv: string[] )
        {
			let config = new MeetingGameConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.type = csvGetString(csv,  this.GetHeadIndex(  "type"  )   );
			config.result = csvGetInt(csv,  this.GetHeadIndex(  "result"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.rate = csvGetInt(csv,  this.GetHeadIndex(  "rate"  )   );
			config.times = csvGetString(csv,  this.GetHeadIndex(  "times"  )   );

			


			this.addConfig(config);
        }
	}
}