/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class DialogueConfigStruct extends BaseConfig
{


	id : number;
	name : string;
	face : number;
	zh_cn_content : string;





	
	get content():string
	{
		let value = <string> LangManager.Instance.getValue("dialogue", this.id, "content");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_content
	}

}