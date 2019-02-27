/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class DTMaintask
	{
		id : number;
		cn_name : string;
		en_name : string;
		trigger : number;
		t_value : number;
		require : number;
		r_value : number;
		s_r_value : number;
		goal : number;
		cn_info : string;
		en_info : string;
		cn_cinfo : string;
		en_cinfo : string;
		cn_content : string;
		en_content : string;
		reward : DTItemNum[];
		pre_quest : number;
		guide : boolean;
		guide_id : number;
	}
}