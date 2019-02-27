/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class WriterLevelConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	level : number;
	ability : number;
	levelup_cost : DTItemNum[];





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("writerLevel", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}