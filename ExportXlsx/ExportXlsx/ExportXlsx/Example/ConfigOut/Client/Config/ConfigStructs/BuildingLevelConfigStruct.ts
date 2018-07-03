/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class BuildingLevelConfigStruct extends BaseConfig
	{
	

		id : number;
		zh_cn_name : string;
		type : number;
		function_open : number[];
		level : number;
		cost : DTItemNum[];
		level_req : number;
		type_level : DTBuildingReq[];
		block_req : number;
		UI : boolean;
		effect_id : number[];
		effect_tips : string;
		level_tips : string;





		
		get name()
		{
			return this.zh_cn_name
		}
	}


}