/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class DailySignTrailerConfigStruct extends BaseConfig
{


	id : number;
	day : number;
	reward : DTItemNum;
	zh_cn_info : string;





	
	get info():string
	{
		let value = <string> LangManager.Instance.getValue("dailySignTrailer", this.id, "info");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_info
	}

}