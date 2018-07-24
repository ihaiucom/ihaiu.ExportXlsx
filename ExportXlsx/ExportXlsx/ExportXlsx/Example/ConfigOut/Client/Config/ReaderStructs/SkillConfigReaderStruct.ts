/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class SkillConfigReaderStruct extends CsvConfigRender<    SkillConfig      >
	{
		path = "Skill";


        ParseCsv(csv: string[] )
        {
			let config = new SkillConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.group_id = csvGetInt(csv,  this.GetHeadIndex(  "group_id"  )   );
			config.lv = csvGetInt(csv,  this.GetHeadIndex(  "lv"  )   );
			config.exp = csvGetInt(csv,  this.GetHeadIndex(  "exp"  )   );
			config.en_name = csvGetString(csv,  this.GetHeadIndex(  "en_name"  )   );
			config.cn_name = csvGetString(csv,  this.GetHeadIndex(  "cn_name"  )   );
			config.en_tips = csvGetString(csv,  this.GetHeadIndex(  "en_tips"  )   );
			config.cn_tips = csvGetString(csv,  this.GetHeadIndex(  "cn_tips"  )   );
			config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
			config.trigger =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "trigger"  )   )   );
			config.effect = csvGetInt(csv,  this.GetHeadIndex(  "effect"  )   );
			config.value = csvGetFloat(csv,  this.GetHeadIndex(  "value"  )   );
			config.stamina = csvGetInt(csv,  this.GetHeadIndex(  "stamina"  )   );

			


			this.addConfig(config);
        }
	}
}