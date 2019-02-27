/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class DTRecharge
	{
		id : number;
		zh_cn_name : string;
		product_name : string;
		product_id : string;
		cost_dollar : number;
		item : DTItemNum;
		gift : DTItemNum[];
		double : number;
		go : number;
		term : number;
		is_show : boolean;
		limit : DTItemNum;
	}
}