/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTVector2 from "../ConfigExtends/DTVector2";



export default class AvatarConfigStruct extends BaseConfig
{


	id : number;
	name_e : string;
	name_c : string;
	body_icon : string;
	zh_cn_icon : string;
	en_icon : string;
	piece_icon : string;
	model_skin : string;
	model_bones : string;
	bg_pic : string;
	co_vector : DTVector2;





	
	get icon():string
	{
		let value = <string> LangManager.Instance.getValue("avatar", this.id, "icon");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_icon
	}

}