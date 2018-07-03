/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MaintaskConfigReaderStruct extends CsvConfigRender<    MaintaskConfig      >
	{
		path = "Maintask";


        ParseCsv(csv: string[] )
        {
			let config = new MaintaskConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.cn_name = csvGetString(csv,  this.GetHeadIndex(  "cn_name"  )   );
			config.en_name = csvGetString(csv,  this.GetHeadIndex(  "en_name"  )   );
			config.trigger = csvGetInt(csv,  this.GetHeadIndex(  "trigger"  )   );
			config.t_value = csvGetInt(csv,  this.GetHeadIndex(  "t_value"  )   );
			config.require = csvGetInt(csv,  this.GetHeadIndex(  "require"  )   );
			config.r_value = csvGetInt(csv,  this.GetHeadIndex(  "r_value"  )   );
			config.cn_info = csvGetString(csv,  this.GetHeadIndex(  "cn_info"  )   );
			config.en_info = csvGetString(csv,  this.GetHeadIndex(  "en_info"  )   );
			config.cn_rinfo = csvGetString(csv,  this.GetHeadIndex(  "cn_rinfo"  )   );
			config.en_rinfo = csvGetString(csv,  this.GetHeadIndex(  "en_rinfo"  )   );
			config.cn_content = csvGetString(csv,  this.GetHeadIndex(  "cn_content"  )   );
			config.en_content = csvGetString(csv,  this.GetHeadIndex(  "en_content"  )   );
			config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
			config.pre_quest = csvGetInt(csv,  this.GetHeadIndex(  "pre_quest"  )   );
			config.guide = csvGetBoolean(csv,  this.GetHeadIndex(  "guide"  )   );
			config.guide_id = csvGetInt(csv,  this.GetHeadIndex(  "guide_id"  )   );

			


			this.addConfig(config);
        }
	}
}