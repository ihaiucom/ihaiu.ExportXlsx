/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class PropertyConfigStruct extends BaseConfig
	{
	

		id : number;
		type : number;
		field : string;
		enName : string;
		zh_cn_name : string;
		icon : string;
		tip : string;





		
		get name()
		{
			return this.zh_cn_name
		}
	}


}