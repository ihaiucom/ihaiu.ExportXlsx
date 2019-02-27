/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class ShopConfigStruct extends BaseConfig
{


	id : number;
	type : number;
	zh_cn_name : string;
	item : DTItemNum[];
	cost : DTItemNum;
	period : string;
	limit : DTItemNum;
	special : number;
	delay : number;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("shop", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}