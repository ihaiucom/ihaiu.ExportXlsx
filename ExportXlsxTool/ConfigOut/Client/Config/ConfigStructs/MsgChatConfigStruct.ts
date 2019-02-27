/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTlValue2 from "../ConfigExtends/DTlValue2";



export default class MsgChatConfigStruct extends BaseConfig
{


	id : number;
	key : string;
	info : string;
	zh_cn_notice : string;
	parameter : DTlValue2[];
	popup : DTlValue2[];





	
	get notice():string
	{
		let value = <string> LangManager.Instance.getValue("msgChat", this.id, "notice");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_notice
	}

}