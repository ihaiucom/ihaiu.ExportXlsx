/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class CountryConfigReaderStruct extends CsvConfigRender<    CountryConfig      >
	{
		path = "Country";


        ParseCsv(csv: string[] )
        {
			let config = new CountryConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.number = csvGetInt(csv,  this.GetHeadIndex(  "number"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.city_num = csvGetInt(csv,  this.GetHeadIndex(  "city_num"  )   );
			config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
			config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
			config.pre_id = csvGetInt(csv,  this.GetHeadIndex(  "pre_id"  )   );
			config.next_country = csvGetInt(csv,  this.GetHeadIndex(  "next_country"  )   );


			this.addConfig(config);
        }
	}
}