/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class ItemConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	zh_cn_item_des : string;
	icon : number;
	star : number;
	type : number;
	max_num : number;
	get_way : number[];
	can_use : boolean;
	use_type : number;
	reward : DTItemNum[];
	can_sell : boolean;
	price : number;
	syn_id : number;
	actor_id : number;
	actor_num : number;
	zh_cn_get_way_explain : string;
	User_item_info : number;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("item", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get item_des():string
	{
		let value = <string> LangManager.Instance.getValue("item", this.id, "item_des");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_item_des
	}
	get get_way_explain():string
	{
		let value = <string> LangManager.Instance.getValue("item", this.id, "get_way_explain");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_get_way_explain
	}

}