/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class CooperateTaskConfigReaderStruct extends CsvConfigRender<    CooperateTaskConfig      >
	{
		path = "CooperateTask";


        ParseCsv(csv: string[] )
        {
			let config = new CooperateTaskConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.task_name = csvGetString(csv,  this.GetHeadIndex(  "task_name"  )   );
			config.task_star = csvGetInt(csv,  this.GetHeadIndex(  "task_star"  )   );
			config.task_type = csvGetInt(csv,  this.GetHeadIndex(  "task_type"  )   );
			config.parameter1 =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "parameter1"  )   )   );
			config.parameter2 =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "parameter2"  )   )   );
			config.parameter3 =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "parameter3"  )   )   );
			config.parameter4 =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "parameter4"  )   )   );
			config.parameter5 =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "parameter5"  )   )   );
			config.reward_id =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "reward_id"  )   )   );
			config.base_reward = csvGetInt(csv,  this.GetHeadIndex(  "base_reward"  )   );
			config.level_par =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "level_par"  )   )   );

			


			this.addConfig(config);
        }
	}
}