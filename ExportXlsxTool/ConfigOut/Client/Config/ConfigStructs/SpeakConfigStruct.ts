/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class SpeakConfigStruct extends BaseConfig
{


	id : number;
	en_speak : string;
	cn_speak : string;
	tips : string;





	
	get speak():string
	{
		let value = <string> LangManager.Instance.getValue("speak", this.id, "speak");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_speak
	}

}