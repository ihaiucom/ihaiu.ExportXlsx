/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class RechargeConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	product_name : string;
	product_id : string;
	cost_dollar : number;
	item : DTItemNum;
	gift : DTItemNum[];
	double : number;
	go : number;
	term : number;
	is_show : boolean;
	limit : DTItemNum;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("recharge", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}