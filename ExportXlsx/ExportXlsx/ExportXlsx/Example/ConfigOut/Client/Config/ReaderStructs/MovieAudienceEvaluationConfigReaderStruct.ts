/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MovieAudienceEvaluationConfigReaderStruct extends CsvConfigRender<    MovieAudienceEvaluationConfig      >
	{
		path = "MovieAudienceEvaluation";


        ParseCsv(csv: string[] )
        {
			let config = new MovieAudienceEvaluationConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.sex = csvGetInt(csv,  this.GetHeadIndex(  "sex"  )   );
			config.pic = csvGetInt(csv,  this.GetHeadIndex(  "pic"  )   );
			config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );
			config.min_score = csvGetFloat(csv,  this.GetHeadIndex(  "min_score"  )   );
			config.max_score = csvGetFloat(csv,  this.GetHeadIndex(  "max_score"  )   );
			config.zh_cn_content = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_content"  )   );

			


			this.addConfig(config);
        }
	}
}