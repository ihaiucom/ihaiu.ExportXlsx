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
		cost : DTItemNum;
		period : string;
		limit : DTItemNum;
		row : number;
		columns : number;
	}
}