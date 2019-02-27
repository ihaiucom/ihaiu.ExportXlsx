/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class SecretaryTypeConfigStruct extends BaseConfig
{


	id : number;
	sex : string;
	pic : string;
	picid : number;
	zh_cn_name : string;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("secretaryType", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}