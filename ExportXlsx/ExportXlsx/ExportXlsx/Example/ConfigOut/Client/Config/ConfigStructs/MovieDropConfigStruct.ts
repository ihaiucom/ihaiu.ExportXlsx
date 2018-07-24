/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class MovieDropConfigStruct extends BaseConfig
	{
	

		id : number;
		gain_level : number;
		zh_cn_gain_name : string;
		gain_pic : number;
		zh_cn_name : string;
		order_num : number;
		oreder_qua : number[];
		expect : number;
		fixed_drop : DTItemNum[];
		drop_num : number;
		drop_item : number[];
		item_num : number[];
		base_fans : number;





		
		get gain_name()
		{
			return this.zh_cn_gain_name
		}
		get name()
		{
			return this.zh_cn_name
		}
	}


}