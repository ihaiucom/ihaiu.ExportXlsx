/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class MailConfigStruct extends BaseConfig
{


	id : number;
	tip : string;
	life_time : number;
	zh_cn_title : string;
	en_title : string;
	zh_tw_title : string;
	item : DTItemNum[];
	zh_cn_content : string;
	en_content : string;
	zh_tw_content : string;





	
	get title():string
	{
		let value = <string> LangManager.Instance.getValue("mail", this.id, "title");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_title
	}
	get content():string
	{
		let value = <string> LangManager.Instance.getValue("mail", this.id, "content");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_content
	}

}