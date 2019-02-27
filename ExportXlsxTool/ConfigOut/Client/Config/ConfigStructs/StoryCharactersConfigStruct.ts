/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class StoryCharactersConfigStruct extends BaseConfig
{


	id : number;
	story_id : number;
	character_num : number;
	zh_cn_name : string;
	type : number;
	type_pic : number;
	sex : number;
	country : number;
	show_type : number;
	age_type : number;
	tags : number[];
	effect : number[];
	zh_cn_introduction : string;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("storyCharacters", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get introduction():string
	{
		let value = <string> LangManager.Instance.getValue("storyCharacters", this.id, "introduction");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_introduction
	}

}