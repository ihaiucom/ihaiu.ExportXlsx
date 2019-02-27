/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTStoryEffect from "../ConfigExtends/DTStoryEffect";



export default class StoryConfigStruct extends BaseConfig
{


	id : number;
	story_num : number;
	stack_sort : number;
	zh_cn_story_name : string;
	name_tips : string;
	poster_name : number;
	zh_cn_introduction : string;
	introduction_tips : string;
	length : number;
	cost : number;
	stars : number;
	type : number;
	tags : number[];
	hidden_tags : number[];
	shoot_type : number;
	property : number[];
	target_mark : boolean;
	male_percent : number;
	female_percent : number;
	child_percent : number;
	reward : DTStoryEffect[];
	sequel_mark : boolean;
	random_name : number;
	box_office_story_con : number;





	
	get story_name():string
	{
		let value = <string> LangManager.Instance.getValue("story", this.id, "story_name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_story_name
	}
	get introduction():string
	{
		let value = <string> LangManager.Instance.getValue("story", this.id, "introduction");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_introduction
	}

}