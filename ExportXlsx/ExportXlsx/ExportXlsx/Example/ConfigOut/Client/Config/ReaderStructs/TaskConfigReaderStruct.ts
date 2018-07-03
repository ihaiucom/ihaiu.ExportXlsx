/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class TaskConfigReaderStruct extends CsvConfigRender<    TaskConfig      >
	{
		path = "Task";


        ParseCsv(csv: string[] )
        {
			let config = new TaskConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.unlock = csvGetInt(csv,  this.GetHeadIndex(  "unlock"  )   );
			config.task_movie = csvGetInt(csv,  this.GetHeadIndex(  "task_movie"  )   );
			config.task_actor_level = csvGetInt(csv,  this.GetHeadIndex(  "task_actor_level"  )   );
			config.task_actor_train = csvGetInt(csv,  this.GetHeadIndex(  "task_actor_train"  )   );
			config.task_actor_gift = csvGetInt(csv,  this.GetHeadIndex(  "task_actor_gift"  )   );
			config.task_actor_skill = csvGetInt(csv,  this.GetHeadIndex(  "task_actor_skill"  )   );
			config.task_skill_level = csvGetInt(csv,  this.GetHeadIndex(  "task_skill_level"  )   );
			config.task_business = csvGetInt(csv,  this.GetHeadIndex(  "task_business"  )   );
			config.task_meeting = csvGetInt(csv,  this.GetHeadIndex(  "task_meeting"  )   );
			config.task_fans = csvGetInt(csv,  this.GetHeadIndex(  "task_fans"  )   );
			config.task_publicize = csvGetInt(csv,  this.GetHeadIndex(  "task_publicize"  )   );
			config.task_city = csvGetInt(csv,  this.GetHeadIndex(  "task_city"  )   );
			config.task_rank_all = csvGetInt(csv,  this.GetHeadIndex(  "task_rank_all"  )   );
			config.task_rank_movie = csvGetInt(csv,  this.GetHeadIndex(  "task_rank_movie"  )   );
			config.task_game_gift = csvGetInt(csv,  this.GetHeadIndex(  "task_game_gift"  )   );
			config.task_treasure = csvGetInt(csv,  this.GetHeadIndex(  "task_treasure"  )   );
			config.task_produce = csvGetInt(csv,  this.GetHeadIndex(  "task_produce"  )   );
			config.task_order = csvGetInt(csv,  this.GetHeadIndex(  "task_order"  )   );
			config.task_income = csvGetInt(csv,  this.GetHeadIndex(  "task_income"  )   );
			config.task_attention = csvGetInt(csv,  this.GetHeadIndex(  "task_attention"  )   );
			config.task_dollar = csvGetInt(csv,  this.GetHeadIndex(  "task_dollar"  )   );
			config.task_cotask = csvGetInt(csv,  this.GetHeadIndex(  "task_cotask"  )   );
			config.task_coorder = csvGetInt(csv,  this.GetHeadIndex(  "task_coorder"  )   );
			config.reward = csvGetInt(csv,  this.GetHeadIndex(  "reward"  )   );
			config.Complete = csvGetInt(csv,  this.GetHeadIndex(  "Complete"  )   );

			


			this.addConfig(config);
        }
	}
}