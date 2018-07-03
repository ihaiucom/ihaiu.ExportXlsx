/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class DTItem
	{
		id : number;
		zh_cn_name : string;
		zh_cn_item_des : string;
		icon : number;
		star : number;
		type : number;
		max_num : number;
		get_way : number[];
		use_type : number;
		reward : DTItemNum[];
		can_sell : boolean;
		price : number;
		syn_id : number;
		actor_id : number;
		actor_num : number;
	}
}