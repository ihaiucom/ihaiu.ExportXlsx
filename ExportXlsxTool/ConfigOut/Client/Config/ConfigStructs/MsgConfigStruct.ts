/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class MsgConfigStruct extends BaseConfig
{


	id : number;
	key : string;
	module : string;
	name : string;
	zh_cn_notice : string;
	en_notice : string;





	
	get notice():string
	{
		let value = <string> LangManager.Instance.getValue("msg", this.id, "notice");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_notice
	}

}