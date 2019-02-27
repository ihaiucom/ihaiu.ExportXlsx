/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class SecretaryConfigStruct extends BaseConfig
{


	id : number;
	key : string;
	zh_cn_info : string;
	par : number;
	description : string;





	
	get info():string
	{
		let value = <string> LangManager.Instance.getValue("secretary", this.id, "info");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_info
	}

}