/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class MovieMediaVisitConfigStruct extends BaseConfig
{


	id : number;
	mediaId : number;
	level : number;
	zh_cn_name : string;
	levelup_req : number;
	cost_id : number;
	cost_num : number;
	min_expection : number;
	max_expection : number;
	pic : number;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("movieMediaVisit", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}