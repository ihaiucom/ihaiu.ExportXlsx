/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class SettingDefaultConfigStruct extends BaseConfig
	{
	

		id : number;
		key : string;
		zh_cn_name : string;
		icon : number;
		default : number;
		switch : boolean;
		popup : string;





		
		get name()
		{
			return this.zh_cn_name
		}
	}


}