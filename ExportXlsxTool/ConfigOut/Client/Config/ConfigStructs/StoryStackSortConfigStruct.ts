/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import DTStoryEffect from "../ConfigExtends/DTStoryEffect";



export default class StoryStackSortConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	scripts : number[];
	rewards : DTItemNum[];
	addition_scene : DTStoryEffect[];





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("storyStackSort", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}