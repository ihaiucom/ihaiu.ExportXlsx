/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class SecretaryTextConfigReaderStruct extends CsvConfigRender<    SecretaryTextConfig      >
	{
		path = "SecretaryText";


        ParseCsv(csv: string[] )
        {
			let config = new SecretaryTextConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.key = csvGetString(csv,  this.GetHeadIndex(  "key"  )   );
			config.zh_cn_text = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_text"  )   );
			config.cn = csvGetString(csv,  this.GetHeadIndex(  "cn"  )   );

			


			this.addConfig(config);
        }
	}
}