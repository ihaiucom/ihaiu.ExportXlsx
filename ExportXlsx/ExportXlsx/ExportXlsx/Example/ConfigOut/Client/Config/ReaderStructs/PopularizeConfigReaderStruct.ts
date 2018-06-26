/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class PopularizeConfigReaderStruct extends CsvConfigRender<    PopularizeConfig      >
	{
		path = "Popularize";


        ParseCsv(csv: string[] )
        {
			let config = new PopularizeConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.pop_level = csvGetInt(csv,  this.GetHeadIndex(  "pop_level"  )   );
			config.cost_id = csvGetInt(csv,  this.GetHeadIndex(  "cost_id"  )   );
			config.cost_num = csvGetInt(csv,  this.GetHeadIndex(  "cost_num"  )   );
			config.increase = csvGetInt(csv,  this.GetHeadIndex(  "increase"  )   );


			this.addConfig(config);
        }
	}
}