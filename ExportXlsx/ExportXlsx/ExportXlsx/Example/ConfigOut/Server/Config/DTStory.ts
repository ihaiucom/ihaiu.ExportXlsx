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
		stack_sort : number;
		zh_cn_story_name : string;
		name_tips : string;
		poster_name : number;
		zh_cn_introduction : string;
		introduction_tips : string;
		length : number;
		cost : number;
		stars : number;
		type : number;
		tags : number[];
		hidden_tags : number[];
		shoot_type : number;
		property : number[];
		target_mark : boolean;
		male_percent : number;
		female_percent : number;
		child_percent : number;
		reward : DTStoryEffect[];
		sequel_mark : boolean;
		random_name : number;
	}
}