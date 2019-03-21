/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class DTStory
	{
		id : number;
		stack_sort : number;
		story_name : string;
		poster_name : number;
		introduction : string;
		cost : number;
		stars : number;
		type : number;
		tags : number[];
		shoot_type : number;
		property : number[];
		target_mark : boolean;
		male_percent : number;
		female_percent : number;
		child_percent : number;
		reward : DTStoryEffect[];
		random_name : number;
		box_office_story_con : number;
	}
}