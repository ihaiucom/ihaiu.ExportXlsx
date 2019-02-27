/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class SettingDefaultConfigStruct extends BaseConfig
{


	id : number;
	key : string;
	zh_cn_name : string;
	icon : number;
	default : number;
	switch : boolean;
	popup : string;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("settingDefault", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}