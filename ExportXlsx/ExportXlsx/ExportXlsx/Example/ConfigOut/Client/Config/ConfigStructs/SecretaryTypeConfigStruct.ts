/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class SecretaryTypeConfigStruct extends BaseConfig
	{
	

		id : number;
		sex : string;
		pic : string;
		zh_cn_name : string;





		
		get name()
		{
			return this.zh_cn_name
		}
	}


}