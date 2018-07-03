/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MovieMidiaEvaluationConfigReaderStruct extends CsvConfigRender<    MovieMidiaEvaluationConfig      >
	{
		path = "MovieMidiaEvaluation";


        ParseCsv(csv: string[] )
        {
			let config = new MovieMidiaEvaluationConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.media_id = csvGetInt(csv,  this.GetHeadIndex(  "media_id"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.zh_cn_commentators = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_commentators"  )   );
			config.min_score = csvGetFloat(csv,  this.GetHeadIndex(  "min_score"  )   );
			config.max_score = csvGetFloat(csv,  this.GetHeadIndex(  "max_score"  )   );
			config.zh_cn_content = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_content"  )   );
			config.praise = csvGetInt(csv,  this.GetHeadIndex(  "praise"  )   );
			config.pic = csvGetInt(csv,  this.GetHeadIndex(  "pic"  )   );

			


			this.addConfig(config);
        }
	}
}