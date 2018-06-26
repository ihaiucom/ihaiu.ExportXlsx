/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class BuildingLevelConfigStruct extends BaseConfig
	{

		id : number;
		name : string;
		type : number;
		function_open : number[];
		tips : string;
		level : number;
		cost : DTItemNum[];
		level_req : number;
		type_level : DTBuildingReq[];
		block_req : number;
		UI : boolean;
		effect_id : number[];




	}


}