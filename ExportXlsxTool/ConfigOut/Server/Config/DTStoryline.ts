/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class DTStoryline
	{
		id : number;
		trigger : number;
		value : number;
		guide_type : number;
		guide_id : number;
		group : number;
		order : number;
		type_id : string;
		ui_type : number;
		cn_ui_content : string;
		en_ui_content : string;
		cn_content : string;
		en_content : string;
		cn_name : string;
		en_name : string;
		anchor : number;
		reward : DTItemNum[];
	}
}