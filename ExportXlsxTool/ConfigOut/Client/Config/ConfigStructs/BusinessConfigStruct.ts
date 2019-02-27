/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class BusinessConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_from : string;
	zh_cn_name : string;
	zh_cn_description : string;
	icon : number;
	reward : DTItemNum[];
	expect : number;





	
	get from():string
	{
		let value = <string> LangManager.Instance.getValue("business", this.id, "from");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_from
	}
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("business", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get description():string
	{
		let value = <string> LangManager.Instance.getValue("business", this.id, "description");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_description
	}

}