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
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );
			config.commentators = csvGetString(csv,  this.GetHeadIndex(  "commentators"  )   );
			config.min_score = csvGetInt(csv,  this.GetHeadIndex(  "min_score"  )   );
			config.max_score = csvGetInt(csv,  this.GetHeadIndex(  "max_score"  )   );
			config.content =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "content"  )   )   );
			config.praise = csvGetInt(csv,  this.GetHeadIndex(  "praise"  )   );
			config.pic = csvGetInt(csv,  this.GetHeadIndex(  "pic"  )   );


			this.addConfig(config);
        }
	}
}