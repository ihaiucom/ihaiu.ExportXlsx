/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class BlockWordsConfigReaderStruct extends CsvConfigRender<    BlockWordsConfig      >
	{
		path = "BlockWords";


        ParseCsv(csv: string[] )
        {
			let config = new BlockWordsConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.text = csvGetString(csv,  this.GetHeadIndex(  "text"  )   );


			this.addConfig(config);
        }
	}
}