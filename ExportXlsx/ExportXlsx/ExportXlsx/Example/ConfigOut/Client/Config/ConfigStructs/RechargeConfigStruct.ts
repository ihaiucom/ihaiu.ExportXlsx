/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class RechargeConfigStruct extends BaseConfig
	{
	

		id : number;
		zh_cn_name : string;
		item : DTItemNum;
		gift : DTItemNum[];
		cost_dollar : number;
		double : number;
		go : number;
		term : number;





		
		get name()
		{
			return this.zh_cn_name
		}
	}


}