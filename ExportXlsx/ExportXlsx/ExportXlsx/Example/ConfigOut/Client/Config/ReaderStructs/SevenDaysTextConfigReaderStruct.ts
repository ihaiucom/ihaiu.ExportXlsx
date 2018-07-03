/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class SevenDaysTextConfigReaderStruct extends CsvConfigRender<    SevenDaysTextConfig      >
	{
		path = "SevenDaysText";


        ParseCsv(csv: string[] )
        {
			let config = new SevenDaysTextConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.key = csvGetString(csv,  this.GetHeadIndex(  "key"  )   );
			config.zh_cn_text = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_text"  )   );
			config.cn = csvGetString(csv,  this.GetHeadIndex(  "cn"  )   );

			


			this.addConfig(config);
        }
	}
}