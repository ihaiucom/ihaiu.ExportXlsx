/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class CinemaConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	level : number;
	sign_level : number;
	pic : number;
	num : number;
	proportion : number;
	favorite_actor : number;
	increase : number;
	unlock : number;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("cinema", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}