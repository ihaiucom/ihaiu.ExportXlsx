/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class SkillEffectConfigReaderStruct extends CsvConfigRender<    SkillEffectConfig      >
	{
		path = "SkillEffect";


        ParseCsv(csv: string[] )
        {
			let config = new SkillEffectConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.effect = csvGetInt(csv,  this.GetHeadIndex(  "effect"  )   );
			config.cn_tips = csvGetString(csv,  this.GetHeadIndex(  "cn_tips"  )   );

			


			this.addConfig(config);
        }
	}
}