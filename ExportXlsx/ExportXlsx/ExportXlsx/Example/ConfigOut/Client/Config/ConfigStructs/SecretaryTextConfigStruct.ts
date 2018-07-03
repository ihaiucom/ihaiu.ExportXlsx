/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class SecretaryTextConfigStruct extends BaseConfig
	{
	

		id : number;
		key : string;
		zh_cn_text : string;
		cn : string;





		
		get text()
		{
			return this.zh_cn_text
		}
	}


}