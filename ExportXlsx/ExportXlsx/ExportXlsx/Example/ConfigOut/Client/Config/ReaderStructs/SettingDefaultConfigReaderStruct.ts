/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class SettingDefaultConfigReaderStruct extends CsvConfigRender<    SettingDefaultConfig      >
	{
		path = "SettingDefault";


        ParseCsv(csv: string[] )
        {
			let config = new SettingDefaultConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.key = csvGetString(csv,  this.GetHeadIndex(  "key"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.default = csvGetBoolean(csv,  this.GetHeadIndex(  "default"  )   );

			


			this.addConfig(config);
        }
	}
}