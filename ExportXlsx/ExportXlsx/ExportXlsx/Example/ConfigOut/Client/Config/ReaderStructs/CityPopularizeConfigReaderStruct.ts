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
			config.level_three_out = csvGetInt(csv,  this.GetHeadIndex(  "level_three_out"  )   );
			config.level_three_num = csvGetInt(csv,  this.GetHeadIndex(  "level_three_num"  )   );
			config.level_three_chance = csvGetFloat(csv,  this.GetHeadIndex(  "level_three_chance"  )   );
			config.level_seven_out = csvGetInt(csv,  this.GetHeadIndex(  "level_seven_out"  )   );
			config.level_seven_num = csvGetInt(csv,  this.GetHeadIndex(  "level_seven_num"  )   );
			config.level_seven_chance = csvGetFloat(csv,  this.GetHeadIndex(  "level_seven_chance"  )   );
			config.level_ten_out = csvGetInt(csv,  this.GetHeadIndex(  "level_ten_out"  )   );
			config.level_ten_num = csvGetInt(csv,  this.GetHeadIndex(  "level_ten_num"  )   );
			config.level_ten_chance = csvGetFloat(csv,  this.GetHeadIndex(  "level_ten_chance"  )   );
			config.level_fifteen_out = csvGetInt(csv,  this.GetHeadIndex(  "level_fifteen_out"  )   );
			config.level_fifteen_num = csvGetInt(csv,  this.GetHeadIndex(  "level_fifteen_num"  )   );
			config.level_fifteen_chance = csvGetFloat(csv,  this.GetHeadIndex(  "level_fifteen_chance"  )   );
			config.level_twenty_out = csvGetInt(csv,  this.GetHeadIndex(  "level_twenty_out"  )   );
			config.level_twenty_num = csvGetInt(csv,  this.GetHeadIndex(  "level_twenty_num"  )   );
			config.level_twenty_chance = csvGetFloat(csv,  this.GetHeadIndex(  "level_twenty_chance"  )   );

			


			this.addConfig(config);
        }
	}
}