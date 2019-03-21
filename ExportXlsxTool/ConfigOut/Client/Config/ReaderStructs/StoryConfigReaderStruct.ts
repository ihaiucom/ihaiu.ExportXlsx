/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import StoryConfig from "../ConfigExtends/StoryConfig";
import DTStoryEffect from "../ConfigExtends/DTStoryEffect";


export default class StoryConfigReaderStruct extends CsvConfigRender<    StoryConfig      >
{
	tableName = "Story";


    ParseCsv(csv: string[] )
    {
		let config = new StoryConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.stack_sort = csvGetInt(csv,  this.GetHeadIndex(  "stack_sort"  )   );
		config.story_name = csvGetString(csv,  this.GetHeadIndex(  "story_name"  )   );
		config.poster_name = csvGetInt(csv,  this.GetHeadIndex(  "poster_name"  )   );
		config.introduction = csvGetString(csv,  this.GetHeadIndex(  "introduction"  )   );
		config.cost = csvGetInt(csv,  this.GetHeadIndex(  "cost"  )   );
		config.stars = csvGetInt(csv,  this.GetHeadIndex(  "stars"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.tags =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "tags"  )   )   );
		config.shoot_type = csvGetInt(csv,  this.GetHeadIndex(  "shoot_type"  )   );
		config.property =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "property"  )   )   );
		config.target_mark = csvGetBoolean(csv,  this.GetHeadIndex(  "target_mark"  )   );
		config.male_percent = csvGetInt(csv,  this.GetHeadIndex(  "male_percent"  )   );
		config.female_percent = csvGetInt(csv,  this.GetHeadIndex(  "female_percent"  )   );
		config.child_percent = csvGetInt(csv,  this.GetHeadIndex(  "child_percent"  )   );
		config.reward =  DTStoryEffect.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
		config.random_name = csvGetInt(csv,  this.GetHeadIndex(  "random_name"  )   );
		config.box_office_story_con = csvGetInt(csv,  this.GetHeadIndex(  "box_office_story_con"  )   );

		


		this.addConfig(config);
    }
}