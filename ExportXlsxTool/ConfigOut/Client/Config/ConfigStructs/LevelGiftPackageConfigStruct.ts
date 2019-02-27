/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class LevelGiftPackageConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	player_level : number;
	reward : DTItemNum[];
	next_id : number;
	image : string;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("levelGiftPackage", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}