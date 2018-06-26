/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class GlobalConfigReaderStruct extends CsvConfigRender<    GlobalConfig      >
	{
		path = "Global";


        ParseCsv(csv: string[] )
        {
			let config = new GlobalConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.key = csvGetString(csv,  this.GetHeadIndex(  "key"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.par =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "par"  )   )   );
			config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );


			this.addConfig(config);
        }
	}
}