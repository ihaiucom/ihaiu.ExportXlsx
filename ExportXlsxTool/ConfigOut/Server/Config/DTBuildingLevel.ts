/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class DTBuildingLevel
	{
		id : number;
		zh_cn_name : string;
		type : number;
		level : number;
		cost : DTItemNum[];
		level_req : number;
		type_level : DTBuildingReq[];
		block_req : number;
		function_open : number[];
		UI : boolean;
		effect_id : number[];
		zh_cn_effect_tips : string;
		zh_cn_level_tips : string;
		building_small : number;
	}
}