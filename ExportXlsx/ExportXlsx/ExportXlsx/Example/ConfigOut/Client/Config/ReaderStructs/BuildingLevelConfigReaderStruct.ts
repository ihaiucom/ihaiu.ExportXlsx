/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
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
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
			config.function_open =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "function_open"  )   )   );
			config.level = csvGetInt(csv,  this.GetHeadIndex(  "level"  )   );
			config.cost =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
			config.level_req = csvGetInt(csv,  this.GetHeadIndex(  "level_req"  )   );
			config.type_level =  DTBuildingReq.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "type_level"  )   )   );
			config.block_req = csvGetInt(csv,  this.GetHeadIndex(  "block_req"  )   );
			config.UI = csvGetBoolean(csv,  this.GetHeadIndex(  "UI"  )   );
			config.effect_id =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "effect_id"  )   )   );
			config.effect_tips = csvGetString(csv,  this.GetHeadIndex(  "effect_tips"  )   );
			config.level_tips = csvGetString(csv,  this.GetHeadIndex(  "level_tips"  )   );

			


			this.addConfig(config);
        }
	}
}