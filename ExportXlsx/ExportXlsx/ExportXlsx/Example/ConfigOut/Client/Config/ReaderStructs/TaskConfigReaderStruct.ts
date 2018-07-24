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
			config.goal = csvGetInt(csv,  this.GetHeadIndex(  "goal"  )   );
			config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
			config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
			config.Complete = csvGetInt(csv,  this.GetHeadIndex(  "Complete"  )   );
			config.pre_id = csvGetInt(csv,  this.GetHeadIndex(  "pre_id"  )   );

			


			this.addConfig(config);
        }
	}
}