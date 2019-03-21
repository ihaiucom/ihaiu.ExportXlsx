/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class ContinueConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("continue", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}