/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class TaskCompleteConfigReaderStruct extends CsvConfigRender<    TaskCompleteConfig      >
	{
		path = "TaskComplete";


        ParseCsv(csv: string[] )
        {
			let config = new TaskCompleteConfig();


			config.completion = csvGetInt(csv,  this.GetHeadIndex(  "completion"  )   );
			config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );

			


			this.addConfig(config);
        }
	}
}