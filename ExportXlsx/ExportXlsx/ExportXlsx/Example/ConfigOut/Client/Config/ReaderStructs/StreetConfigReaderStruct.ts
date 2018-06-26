/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class StreetConfigReaderStruct extends CsvConfigRender<    StreetConfig      >
	{
		path = "Street";


        ParseCsv(csv: string[] )
        {
			let config = new StreetConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.city_schedule = csvGetInt(csv,  this.GetHeadIndex(  "city_schedule"  )   );
			config.position =  DTVector2.parse(       csvGetString(csv,  this.GetHeadIndex(  "position"  )   )   );
			config.spokesperson_sex = csvGetInt(csv,  this.GetHeadIndex(  "spokesperson_sex"  )   );
			config.spokesperson_Continents = csvGetInt(csv,  this.GetHeadIndex(  "spokesperson_Continents"  )   );
			config.spokesperson_type = csvGetInt(csv,  this.GetHeadIndex(  "spokesperson_type"  )   );
			config.spokesperson_age = csvGetInt(csv,  this.GetHeadIndex(  "spokesperson_age"  )   );
			config.spokesperson_scene = csvGetInt(csv,  this.GetHeadIndex(  "spokesperson_scene"  )   );
			config.spokesperson_performance = csvGetInt(csv,  this.GetHeadIndex(  "spokesperson_performance"  )   );
			config.spokesperson_plot = csvGetInt(csv,  this.GetHeadIndex(  "spokesperson_plot"  )   );
			config.spokesperson_art = csvGetInt(csv,  this.GetHeadIndex(  "spokesperson_art"  )   );
			config.spokesperson_entertainment = csvGetInt(csv,  this.GetHeadIndex(  "spokesperson_entertainment"  )   );
			config.publicize_schedule = csvGetInt(csv,  this.GetHeadIndex(  "publicize_schedule"  )   );
			config.publicize_cost = csvGetInt(csv,  this.GetHeadIndex(  "publicize_cost"  )   );
			config.once_reward = csvGetInt(csv,  this.GetHeadIndex(  "once_reward"  )   );
			config.finale_reward = csvGetInt(csv,  this.GetHeadIndex(  "finale_reward"  )   );
			config.expect = csvGetInt(csv,  this.GetHeadIndex(  "expect"  )   );
			config.pre_id = csvGetInt(csv,  this.GetHeadIndex(  "pre_id"  )   );
			config.next_stage = csvGetInt(csv,  this.GetHeadIndex(  "next_stage"  )   );
			config.city = csvGetInt(csv,  this.GetHeadIndex(  "city"  )   );


			this.addConfig(config);
        }
	}
}