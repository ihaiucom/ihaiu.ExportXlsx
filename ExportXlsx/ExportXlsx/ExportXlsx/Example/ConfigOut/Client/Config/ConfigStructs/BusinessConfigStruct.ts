/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class BusinessConfigStruct extends BaseConfig
	{
	

		id : number;
		zh_cn_from : string;
		zh_cn_name : string;
		zh_cn_description : string;
		icon : number;
		reward : DTItemNum[];
		expect : number;





		
		get from()
		{
			return this.zh_cn_from
		}
		get name()
		{
			return this.zh_cn_name
		}
		get description()
		{
			return this.zh_cn_description
		}
	}


}