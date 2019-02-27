/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class HeadPortraitConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	sex : number;
	unlock : DTItemNum;
	icon : number;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("headPortrait", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}