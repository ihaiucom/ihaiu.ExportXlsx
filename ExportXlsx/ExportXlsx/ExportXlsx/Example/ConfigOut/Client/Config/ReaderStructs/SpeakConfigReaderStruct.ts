/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class SpeakConfigReaderStruct extends CsvConfigRender<    SpeakConfig      >
	{
		path = "Speak";


        ParseCsv(csv: string[] )
        {
			let config = new SpeakConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.en_speak = csvGetString(csv,  this.GetHeadIndex(  "en_speak"  )   );
			config.cn_speak = csvGetString(csv,  this.GetHeadIndex(  "cn_speak"  )   );

			


			this.addConfig(config);
        }
	}
}