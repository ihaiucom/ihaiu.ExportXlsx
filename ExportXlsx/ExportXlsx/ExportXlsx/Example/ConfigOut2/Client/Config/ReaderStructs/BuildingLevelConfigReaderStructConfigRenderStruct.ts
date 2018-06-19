/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace configs
{

	export class BuildingLevelConfigReaderStruct extends CsvConfigRender<    BuildingLevelConfig      >
	{
		path = "BuildingLevel";


        ParseCsv(csv: string[] )
        {
			let config = new BuildingLevelConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.function_open =  array.parse(       csvGetString(csv,  this.GetHeadIndex(  "function_open"  )   )   );
			config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );
			config.level = csvGetInt(csv,  this.GetHeadIndex(  "level"  )   );
			config.cost =  array.parse(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
			config.level_req = csvGetInt(csv,  this.GetHeadIndex(  "level_req"  )   );
			config.building_req =  array.parse(       csvGetString(csv,  this.GetHeadIndex(  "building_req"  )   )   );
			config.block_req = csvGetInt(csv,  this.GetHeadIndex(  "block_req"  )   );
			config.UI =  boolean.parse(       csvGetString(csv,  this.GetHeadIndex(  "UI"  )   )   );
			config.effect_id =  array.parse(       csvGetString(csv,  this.GetHeadIndex(  "effect_id"  )   )   );


			this.addConfig(config);
        }
	}
}