/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class LoadingConfigReaderStruct extends CsvConfigRender<    LoadingConfig      >
	{
		path = "Loading";


        ParseCsv(csv: string[] )
        {
			let config = new LoadingConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.text = csvGetString(csv,  this.GetHeadIndex(  "text"  )   );

			


			this.addConfig(config);
        }
	}
}