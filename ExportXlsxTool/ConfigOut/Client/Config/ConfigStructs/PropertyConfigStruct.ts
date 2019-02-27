/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class PropertyConfigStruct extends BaseConfig
{


	id : number;
	type : number;
	field : string;
	enName : string;
	zh_cn_name : string;
	icon : number;
	tip : string;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("property", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}