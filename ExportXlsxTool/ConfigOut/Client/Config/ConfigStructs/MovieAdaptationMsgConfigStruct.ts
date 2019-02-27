/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class MovieAdaptationMsgConfigStruct extends BaseConfig
{


	id : number;
	name : string;
	adaptation_min : number;
	adaptation_max : number;
	zh_cn_msg1 : string;
	zh_cn_msg2 : string;
	zh_cn_msg3 : string;





	
	get msg1():string
	{
		let value = <string> LangManager.Instance.getValue("movieAdaptationMsg", this.id, "msg1");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_msg1
	}
	get msg2():string
	{
		let value = <string> LangManager.Instance.getValue("movieAdaptationMsg", this.id, "msg2");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_msg2
	}
	get msg3():string
	{
		let value = <string> LangManager.Instance.getValue("movieAdaptationMsg", this.id, "msg3");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_msg3
	}

}