/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class DTCupPackage
	{
		id : number;
		zh_cn_name : string;
		zh_cn_des : string;
		target_type : number[];
		target_num : number;
		reward : DTItemNum[];
		limit_time : number;
		image : string;
	}
}