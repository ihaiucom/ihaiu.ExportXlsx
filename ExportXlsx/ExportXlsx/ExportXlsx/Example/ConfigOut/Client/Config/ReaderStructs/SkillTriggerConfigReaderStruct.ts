/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class SkillTriggerConfigReaderStruct extends CsvConfigRender<    SkillTriggerConfig      >
	{
		path = "SkillTrigger";


        ParseCsv(csv: string[] )
        {
			let config = new SkillTriggerConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.trigger = csvGetString(csv,  this.GetHeadIndex(  "trigger"  )   );
			config.value = csvGetInt(csv,  this.GetHeadIndex(  "value"  )   );
			config.cn_tips = csvGetString(csv,  this.GetHeadIndex(  "cn_tips"  )   );


			this.addConfig(config);
        }
	}
}