/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class MaintaskConfigStruct extends BaseConfig
{


	id : number;
	cn_name : string;
	en_name : string;
	trigger : number;
	t_value : number;
	require : number;
	r_value : number;
	s_r_value : number;
	goal : number;
	cn_info : string;
	en_info : string;
	cn_cinfo : string;
	en_cinfo : string;
	cn_content : string;
	en_content : string;
	reward : DTItemNum[];
	pre_quest : number;
	guide : boolean;
	guide_id : number;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("maintask", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_name
	}
	get info():string
	{
		let value = <string> LangManager.Instance.getValue("maintask", this.id, "info");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_info
	}
	get cinfo():string
	{
		let value = <string> LangManager.Instance.getValue("maintask", this.id, "cinfo");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_cinfo
	}
	get content():string
	{
		let value = <string> LangManager.Instance.getValue("maintask", this.id, "content");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_content
	}

}