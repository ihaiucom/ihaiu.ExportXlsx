/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class SettingTextConfigReaderStruct extends CsvConfigRender<    SettingTextConfig      >
	{
		path = "SettingText";


        ParseCsv(csv: string[] )
        {
			let config = new SettingTextConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.key = csvGetString(csv,  this.GetHeadIndex(  "key"  )   );
			config.zh_cn_text = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_text"  )   );


			this.addConfig(config);
        }
	}
}