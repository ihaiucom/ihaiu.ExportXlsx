/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class TaskConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	unlock : number;
	require : number;
	goal : number;
	s_goal : number;
	type : number;
	reward : DTItemNum[];
	Complete : number;
	pre_id : number;
	guide : number;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("task", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}