/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class DTBlockLevel
	{
		id : number;
		zh_cn_name : string;
		pic : number;
		upgrade_req : number;
		upgrade_menu : number[];
		upgrade_reward : DTItemNum[];
		daily_reward : DTItemNum;
		cinema : number[];
		level_multiple : number;
		level_con : number;
		theater_level_con : number;
		good : number;
		big_sell : number;
		great_sell : number;
		myth_sell : number;
		marvel_sell : number;
		zh_cn_current_msg : string[];
		zh_cn_next_msg : string[];
	}
}