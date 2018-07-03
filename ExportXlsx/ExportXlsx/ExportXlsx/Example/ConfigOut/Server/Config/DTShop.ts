/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class DTShop
	{
		id : number;
		type : number;
		zh_cn_name : string;
		item : DTItemNum[];
		cost : number;
		period : string;
		daily_limit : number;
		weekly_limit : number;
		row : number;
		columns : number;
	}
}