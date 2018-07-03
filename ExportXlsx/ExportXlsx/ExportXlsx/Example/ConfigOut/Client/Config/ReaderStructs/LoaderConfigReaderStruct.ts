/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class LoaderConfigReaderStruct extends CsvConfigRender<    LoaderConfig      >
	{
		path = "Loader";


        ParseCsv(csv: string[] )
        {
			let config = new LoaderConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.isShowCircle = csvGetBoolean(csv,  this.GetHeadIndex(  "isShowCircle"  )   );

			


			this.addConfig(config);
        }
	}
}