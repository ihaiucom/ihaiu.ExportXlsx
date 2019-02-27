/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import DTBuildingReq from "../ConfigExtends/DTBuildingReq";



export default class BuildingLevelConfigStruct extends BaseConfig
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





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("buildingLevel", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get effect_tips():string
	{
		let value = <string> LangManager.Instance.getValue("buildingLevel", this.id, "effect_tips");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_effect_tips
	}
	get level_tips():string
	{
		let value = <string> LangManager.Instance.getValue("buildingLevel", this.id, "level_tips");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_level_tips
	}

}