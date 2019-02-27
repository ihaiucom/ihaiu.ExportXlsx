/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class FloorConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	cost : DTItemNum;
	level_req : number;
	city_req : number;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("floor", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}