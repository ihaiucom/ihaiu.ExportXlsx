/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class StoryStackConfigReaderStruct extends CsvConfigRender<    StoryStackConfig      >
	{
		path = "StoryStack";


        ParseCsv(csv: string[] )
        {
			let config = new StoryStackConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.key = csvGetString(csv,  this.GetHeadIndex(  "key"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.par =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "par"  )   )   );


			this.addConfig(config);
        }
	}
}