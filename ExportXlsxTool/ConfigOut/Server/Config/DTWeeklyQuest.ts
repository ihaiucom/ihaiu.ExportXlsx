/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class DTWeeklyQuest
	{
		id : number;
		zh_cn_name : string;
		zh_cn_des : string;
		target_score : number;
		target_days : number;
		reward : DTItemNum[];
	}
}