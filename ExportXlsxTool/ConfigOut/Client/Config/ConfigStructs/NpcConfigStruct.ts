/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class NpcConfigStruct extends BaseConfig
{


	id : number;
	en_name : string;
	cn_name : string;
	sex : number;
	avatar : number;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("npc", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_name
	}

}