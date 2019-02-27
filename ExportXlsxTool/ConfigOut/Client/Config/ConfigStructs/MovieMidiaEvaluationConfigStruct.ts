/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class MovieMidiaEvaluationConfigStruct extends BaseConfig
{


	id : number;
	media_id : number;
	zh_cn_name : string;
	zh_cn_commentators : string;
	min_score : number;
	max_score : number;
	zh_cn_content : string;
	praise : number[];
	pic : number;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("movieMidiaEvaluation", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get commentators():string
	{
		let value = <string> LangManager.Instance.getValue("movieMidiaEvaluation", this.id, "commentators");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_commentators
	}
	get content():string
	{
		let value = <string> LangManager.Instance.getValue("movieMidiaEvaluation", this.id, "content");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_content
	}

}