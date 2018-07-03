/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class SettingTextConfigStruct extends BaseConfig
	{
	

		id : number;
		key : string;
		zh_cn_text : string;





		
		get text()
		{
			return this.zh_cn_text
		}
	}


}