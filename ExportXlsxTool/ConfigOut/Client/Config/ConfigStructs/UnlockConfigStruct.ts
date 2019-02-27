/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class UnlockConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	icon_type : number;
	menu_id : number;
	item_id : number;
	show_type : number;
	group : number;
	group_id : number;
	position : number;
	open_type : number;
	open_data : number;
	open_show : number[];
	plot : number;
	time : number;
	close_type : number;
	close_data : number;
	continue : number;
	is_new : boolean;
	zh_cn_touch_txt : string;
	tips : string;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("unlock", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get touch_txt():string
	{
		let value = <string> LangManager.Instance.getValue("unlock", this.id, "touch_txt");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_touch_txt
	}

}