/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class DTBlockRankingList
	{
		id : number;
		name : string;
		type : number;
		rank : number;
		reward : DTItemNum[];
		extra_reward : DTItemNum;
		congratulate_switch : boolean;
		congratulate_reward : DTItemNum;
	}
}