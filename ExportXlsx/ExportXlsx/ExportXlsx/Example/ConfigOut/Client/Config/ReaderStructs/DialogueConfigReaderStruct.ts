/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class DialogueConfigReaderStruct extends CsvConfigRender<    DialogueConfig      >
	{
		path = "Dialogue";


        ParseCsv(csv: string[] )
        {
			let config = new DialogueConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.content = csvGetString(csv,  this.GetHeadIndex(  "content"  )   );

			


			this.addConfig(config);
        }
	}
}