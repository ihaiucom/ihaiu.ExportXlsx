/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class GameRandomNameConfigStruct extends BaseConfig
{


	id : number;
	type : number;
	zh_cn_names : string[];
	tips : string;





	
	get names():string[]
	{
		let value = <string[]> LangManager.Instance.getValue("gameRandomName", this.id, "names");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_names
	}

}