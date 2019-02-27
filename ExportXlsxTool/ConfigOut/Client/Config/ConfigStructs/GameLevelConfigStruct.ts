/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class GameLevelConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	stall : number;
	icon : number;
	pre_id : number;
	next_level : number;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("gameLevel", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}