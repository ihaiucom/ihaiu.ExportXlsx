/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class ItemConfigStruct extends BaseConfig
	{

		id : number;
		name : string;
		item_des : string;
		icon : number;
		star : number;
		name_tips : string;
		type : number;
		max_num : number;
		get_way : number[];
		can_use : boolean;
		reward : DTItemNum[];
		can_sell : boolean;
		price : number;
		syn_id : number;
		actor_id : number;
		actor_num : number;




	}


}