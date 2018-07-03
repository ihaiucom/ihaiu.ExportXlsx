/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MsgConfigReaderStruct extends CsvConfigRender<    MsgConfig      >
	{
		path = "Msg";


        ParseCsv(csv: string[] )
        {
			let config = new MsgConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.key = csvGetString(csv,  this.GetHeadIndex(  "key"  )   );
			config.module = csvGetString(csv,  this.GetHeadIndex(  "module"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.zh_cn_notice = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_notice"  )   );

			


			this.addConfig(config);
        }
	}
}