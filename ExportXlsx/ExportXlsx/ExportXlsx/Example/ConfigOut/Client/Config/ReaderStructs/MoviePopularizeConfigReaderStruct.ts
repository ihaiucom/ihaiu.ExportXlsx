/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MoviePopularizeConfigReaderStruct extends CsvConfigRender<    MoviePopularizeConfig      >
	{
		path = "MoviePopularize";


        ParseCsv(csv: string[] )
        {
			let config = new MoviePopularizeConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.pop_level = csvGetInt(csv,  this.GetHeadIndex(  "pop_level"  )   );
			config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );
			config.cost_id = csvGetInt(csv,  this.GetHeadIndex(  "cost_id"  )   );
			config.cost_num = csvGetInt(csv,  this.GetHeadIndex(  "cost_num"  )   );
			config.increase = csvGetInt(csv,  this.GetHeadIndex(  "increase"  )   );


			this.addConfig(config);
        }
	}
}