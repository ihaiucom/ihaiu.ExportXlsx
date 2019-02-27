/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class MovieMidiaEvaluationMsgConfigStruct extends BaseConfig
{


	id : number;
	name : string;
	score_min : number;
	scor_max : number;
	zh_cn_msg : string;





	
	get msg():string
	{
		let value = <string> LangManager.Instance.getValue("movieMidiaEvaluationMsg", this.id, "msg");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_msg
	}

}