/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class StoryConfigStruct extends BaseConfig
	{
	

		id : number;
		story_num : number;
		stack_sort : number;
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
		shoot_type : number;
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
		random_name : number;





		
		get story_name()
		{
			return this.zh_cn_story_name
		}
		get introduction()
		{
			return this.zh_cn_introduction
		}
	}


}