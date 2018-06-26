/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class RandomNameConfigReaderStruct extends CsvConfigRender<    RandomNameConfig      >
	{
		path = "RandomName";


        ParseCsv(csv: string[] )
        {
			let config = new RandomNameConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.text = csvGetString(csv,  this.GetHeadIndex(  "text"  )   );


			this.addConfig(config);
        }
	}
}