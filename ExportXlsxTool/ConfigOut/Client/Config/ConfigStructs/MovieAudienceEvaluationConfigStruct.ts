/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class MovieAudienceEvaluationConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	sex : number;
	pic : number;
	tips : string;
	min_score : number;
	max_score : number;
	zh_cn_content : string;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("movieAudienceEvaluation", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get content():string
	{
		let value = <string> LangManager.Instance.getValue("movieAudienceEvaluation", this.id, "content");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_content
	}

}