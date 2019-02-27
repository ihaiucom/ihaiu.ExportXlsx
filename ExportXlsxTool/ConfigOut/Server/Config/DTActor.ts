/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class DTActor
	{
		id : number;
		en_name : string;
		cn_name : string;
		random_name : number;
		star : number;
		sex : number;
		country : number;
		show_type : number;
		age_type : number;
		avatar : number;
		spectacle : number;
		perform : number;
		plot : number;
		art : number;
		entertainment : number;
		main_id : number;
		skill : DTActorSkill[];
		story_type : DTActorStory[];
		story_feature : DTActorFeature[];
		character : DTActorCharacter[];
		surprise : number;
		cost : DTItemNum;
		recruit_reward : DTItemNum[];
		enable_cost : DTItemNum;
		random_value : number;
		exp : number;
		paycheck : number;
		stamina : number;
		culture : number;
		assets : number;
		en_tips : string;
		cn_tips : string;
		en_getway : string;
		cn_getway : string;
	}
}