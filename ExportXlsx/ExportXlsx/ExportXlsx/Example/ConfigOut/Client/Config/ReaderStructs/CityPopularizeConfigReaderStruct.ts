/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class CityPopularizeConfigReaderStruct extends CsvConfigRender<    CityPopularizeConfig      >
	{
		path = "CityPopularize";


        ParseCsv(csv: string[] )
        {
			let config = new CityPopularizeConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.level_out_3 = csvGetInt(csv,  this.GetHeadIndex(  "level_out_3"  )   );
			config.level_num_3 = csvGetInt(csv,  this.GetHeadIndex(  "level_num_3"  )   );
			config.level_chance_3 = csvGetFloat(csv,  this.GetHeadIndex(  "level_chance_3"  )   );
			config.level_out_7 = csvGetInt(csv,  this.GetHeadIndex(  "level_out_7"  )   );
			config.level_num_7 = csvGetInt(csv,  this.GetHeadIndex(  "level_num_7"  )   );
			config.level_chance_7 = csvGetFloat(csv,  this.GetHeadIndex(  "level_chance_7"  )   );
			config.level_out_10 = csvGetInt(csv,  this.GetHeadIndex(  "level_out_10"  )   );
			config.level_num_10 = csvGetInt(csv,  this.GetHeadIndex(  "level_num_10"  )   );
			config.level_chance_10 = csvGetFloat(csv,  this.GetHeadIndex(  "level_chance_10"  )   );
			config.level_out_15 = csvGetInt(csv,  this.GetHeadIndex(  "level_out_15"  )   );
			config.level_num_15 = csvGetInt(csv,  this.GetHeadIndex(  "level_num_15"  )   );
			config.level_chance_15 = csvGetFloat(csv,  this.GetHeadIndex(  "level_chance_15"  )   );
			config.level_out_20 = csvGetInt(csv,  this.GetHeadIndex(  "level_out_20"  )   );
			config.level_num_20 = csvGetInt(csv,  this.GetHeadIndex(  "level_num_20"  )   );
			config.level_chance_20 = csvGetFloat(csv,  this.GetHeadIndex(  "level_chance_20"  )   );

			


			this.addConfig(config);
        }
	}
}