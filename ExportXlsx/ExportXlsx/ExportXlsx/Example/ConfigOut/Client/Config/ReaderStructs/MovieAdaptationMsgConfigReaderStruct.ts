/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MovieAdaptationMsgConfigReaderStruct extends CsvConfigRender<    MovieAdaptationMsgConfig      >
	{
		path = "MovieAdaptationMsg";


        ParseCsv(csv: string[] )
        {
			let config = new MovieAdaptationMsgConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.adaptation_min = csvGetInt(csv,  this.GetHeadIndex(  "adaptation_min"  )   );
			config.adaptation_max = csvGetInt(csv,  this.GetHeadIndex(  "adaptation_max"  )   );
			config.zh_cn_msg = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_msg"  )   );

			


			this.addConfig(config);
        }
	}
}