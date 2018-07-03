/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class TaskConfigStruct extends BaseConfig
	{
	

		id : number;
		zh_cn_name : string;
		unlock : number;
		task_movie : number;
		task_actor_level : number;
		task_actor_train : number;
		task_actor_gift : number;
		task_actor_skill : number;
		task_skill_level : number;
		task_business : number;
		task_meeting : number;
		task_fans : number;
		task_publicize : number;
		task_city : number;
		task_rank_all : number;
		task_rank_movie : number;
		task_game_gift : number;
		task_treasure : number;
		task_produce : number;
		task_order : number;
		task_income : number;
		task_attention : number;
		task_dollar : number;
		task_cotask : number;
		task_coorder : number;
		reward : number;
		Complete : number;





		
		get name()
		{
			return this.zh_cn_name
		}
	}


}