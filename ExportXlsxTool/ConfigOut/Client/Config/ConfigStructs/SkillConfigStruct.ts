/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class SkillConfigStruct extends BaseConfig
{


	id : number;
	group_id : number;
	lv : number;
	exp : number;
	en_name : string;
	cn_name : string;
	en_tips : string;
	cn_tips : string;
	en_effecttext : string;
	cn_effecttext : string;
	icon : number;
	trigger : number[];
	effect : number;
	value : number;
	stamina : number;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("skill", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_name
	}
	get tips():string
	{
		let value = <string> LangManager.Instance.getValue("skill", this.id, "tips");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_tips
	}
	get effecttext():string
	{
		let value = <string> LangManager.Instance.getValue("skill", this.id, "effecttext");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_effecttext
	}

}