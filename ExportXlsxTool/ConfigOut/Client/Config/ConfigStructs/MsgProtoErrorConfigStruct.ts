/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class MsgProtoErrorConfigStruct extends BaseConfig
{


	id : number;
	key : string;
	module : string;
	zh_cn_notice : string;





	
	get notice():string
	{
		let value = <string> LangManager.Instance.getValue("msgProtoError", this.id, "notice");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_notice
	}

}