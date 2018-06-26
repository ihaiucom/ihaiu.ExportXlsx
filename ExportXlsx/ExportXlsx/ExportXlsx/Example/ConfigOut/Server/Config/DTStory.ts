/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class DTStory
	{
		id : number;
		story_num : number;
		zh_cn_story_name : string;
		name_tips : string;
		poster_name : string;
		zh_cn_introduction : string;
		introduction_tips : string;
		length : number;
		cost : number;
		stars : number;
		type : number;
		tags : number[];
		hidden_tags : number[];
		shoot_type : DTShootType[];
		property : number[];
		target_mark : boolean;
		target : number;
		male_percent : number;
		female_percent : number;
		child_percent : number;
		reward : DTStoryEffect[];
		sequel_mark : boolean;
		interviews_bottom : number;
		interviews_top : number;
	}
}