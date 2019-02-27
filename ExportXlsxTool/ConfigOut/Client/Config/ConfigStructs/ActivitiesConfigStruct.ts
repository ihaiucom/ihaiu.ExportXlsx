/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class ActivitiesConfigStruct extends BaseConfig
{


	id : number;
	type : number;
	zh_cn_activities_name : string;
	start_type : number;
	level_req : number;
	block_req : number;
	start : number;
	duration : number;
	icon : number;
	icon_chosen : number;
	zh_cn_activities_info : string;
	info : string;





	
	get activities_name():string
	{
		let value = <string> LangManager.Instance.getValue("activities", this.id, "activities_name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_activities_name
	}
	get activities_info():string
	{
		let value = <string> LangManager.Instance.getValue("activities", this.id, "activities_info");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_activities_info
	}

}