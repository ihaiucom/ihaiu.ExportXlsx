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
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.sex = csvGetInt(csv,  this.GetHeadIndex(  "sex"  )   );
			config.pic = csvGetString(csv,  this.GetHeadIndex(  "pic"  )   );
			config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );
			config.min_score = csvGetInt(csv,  this.GetHeadIndex(  "min_score"  )   );
			config.max_score = csvGetInt(csv,  this.GetHeadIndex(  "max_score"  )   );
			config.content =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "content"  )   )   );


			this.addConfig(config);
        }
	}
}