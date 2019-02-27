/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class DTEvent
	{
		id : number;
		model : number;
		type : number;
		action : DTPerformActoin[];
		speak : DTPerformSpeak[];
		tips : string;
	}
}