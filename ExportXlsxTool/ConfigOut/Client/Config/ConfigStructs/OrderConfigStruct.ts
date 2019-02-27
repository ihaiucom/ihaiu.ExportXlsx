/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class OrderConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name1 : string;
	zh_cn_name2 : string;
	icon : number;
	block : number;
	need : DTItemNum[];
	quality : number;
	reward : DTItemNum;
	expect : number;





	
	get name1():string
	{
		let value = <string> LangManager.Instance.getValue("order", this.id, "name1");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name1
	}
	get name2():string
	{
		let value = <string> LangManager.Instance.getValue("order", this.id, "name2");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name2
	}

}