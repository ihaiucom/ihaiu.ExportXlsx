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
			config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.content = csvGetString(csv,  this.GetHeadIndex(  "content"  )   );
			config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );


			this.addConfig(config);
        }
	}
}