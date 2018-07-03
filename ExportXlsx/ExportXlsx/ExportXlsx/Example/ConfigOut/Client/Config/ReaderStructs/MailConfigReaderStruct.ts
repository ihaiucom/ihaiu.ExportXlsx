/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MailConfigReaderStruct extends CsvConfigRender<    MailConfig      >
	{
		path = "Mail";


        ParseCsv(csv: string[] )
        {
			let config = new MailConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.tip = csvGetString(csv,  this.GetHeadIndex(  "tip"  )   );
			config.life_time = csvGetInt(csv,  this.GetHeadIndex(  "life_time"  )   );
			config.zh_cn_title = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_title"  )   );
			config.item =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "item"  )   )   );
			config.zh_cn_content = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_content"  )   );

			


			this.addConfig(config);
        }
	}
}