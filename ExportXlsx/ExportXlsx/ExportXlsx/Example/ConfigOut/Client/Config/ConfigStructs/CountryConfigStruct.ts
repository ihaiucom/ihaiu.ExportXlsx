/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class CountryConfigStruct extends BaseConfig
	{
	

		id : number;
		number : number;
		zh_cn_name : string;
		city_num : number;
		icon : number;
		flag : number;
		reward : DTItemNum[];
		pre_id : number;
		next_country : number;





		
		get name()
		{
			return this.zh_cn_name
		}
	}


}