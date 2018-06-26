/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class ActorProficiencyConfigReaderStruct extends CsvConfigRender<    ActorProficiencyConfig      >
	{
		path = "ActorProficiency";


        ParseCsv(csv: string[] )
        {
			let config = new ActorProficiencyConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.shoot_type = csvGetInt(csv,  this.GetHeadIndex(  "shoot_type"  )   );
			config.lv = csvGetInt(csv,  this.GetHeadIndex(  "lv"  )   );
			config.shoot_exp = csvGetInt(csv,  this.GetHeadIndex(  "shoot_exp"  )   );
			config.exp = csvGetInt(csv,  this.GetHeadIndex(  "exp"  )   );


			this.addConfig(config);
        }
	}
}