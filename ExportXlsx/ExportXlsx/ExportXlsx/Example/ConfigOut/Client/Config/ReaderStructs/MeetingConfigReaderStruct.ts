/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MeetingConfigReaderStruct extends CsvConfigRender<    MeetingConfig      >
	{
		path = "Meeting";


        ParseCsv(csv: string[] )
        {
			let config = new MeetingConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.level = csvGetInt(csv,  this.GetHeadIndex(  "level"  )   );
			config.meeting_cd = csvGetInt(csv,  this.GetHeadIndex(  "meeting_cd"  )   );
			config.cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );

			


			this.addConfig(config);
        }
	}
}