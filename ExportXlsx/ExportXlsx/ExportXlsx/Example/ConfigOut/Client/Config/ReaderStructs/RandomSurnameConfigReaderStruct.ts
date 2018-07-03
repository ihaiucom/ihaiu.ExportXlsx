/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class RandomSurnameConfigReaderStruct extends CsvConfigRender<    RandomSurnameConfig      >
	{
		path = "RandomSurname";


        ParseCsv(csv: string[] )
        {
			let config = new RandomSurnameConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.text = csvGetString(csv,  this.GetHeadIndex(  "text"  )   );

			


			this.addConfig(config);
        }
	}
}