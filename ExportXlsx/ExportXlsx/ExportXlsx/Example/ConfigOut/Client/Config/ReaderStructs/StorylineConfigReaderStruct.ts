/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class StorylineConfigReaderStruct extends CsvConfigRender<    StorylineConfig      >
	{
		path = "Storyline";


        ParseCsv(csv: string[] )
        {
			let config = new StorylineConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.trigger = csvGetInt(csv,  this.GetHeadIndex(  "trigger"  )   );
			config.value = csvGetInt(csv,  this.GetHeadIndex(  "value"  )   );
			config.guide = csvGetBoolean(csv,  this.GetHeadIndex(  "guide"  )   );
			config.guide_id = csvGetInt(csv,  this.GetHeadIndex(  "guide_id"  )   );
			config.group = csvGetInt(csv,  this.GetHeadIndex(  "group"  )   );
			config.order = csvGetInt(csv,  this.GetHeadIndex(  "order"  )   );
			config.type_id = csvGetInt(csv,  this.GetHeadIndex(  "type_id"  )   );
			config.cn_content = csvGetString(csv,  this.GetHeadIndex(  "cn_content"  )   );
			config.en_content = csvGetString(csv,  this.GetHeadIndex(  "en_content"  )   );
			config.anchor = csvGetInt(csv,  this.GetHeadIndex(  "anchor"  )   );
			config.reward =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );

			


			this.addConfig(config);
        }
	}
}