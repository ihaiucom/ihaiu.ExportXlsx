/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class DTBlockLevel
	{
		id : number;
		name : string;
		tips : string;
		pic : number;
		upgrade_req : number;
		upgrade_menu : number[];
		upgrade_reward : DTItemNum[];
		daily_reward : DTItemNum;
		cinema : number[];
		level_multiple : number;
		level_con : number;
		good : number;
		big_sell : number;
		great_sell : number;
		myth_sell : number;
		marvel_sell : number;
		current_msg : string[];
		next_msg : string[];
	}
}