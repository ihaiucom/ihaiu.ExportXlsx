/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class StoryTaskConfigReaderStruct extends CsvConfigRender<    StoryTaskConfig      >
	{
		path = "StoryTask";


        ParseCsv(csv: string[] )
        {
			let config = new StoryTaskConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.task = csvGetInt(csv,  this.GetHeadIndex(  "task"  )   );
			config.value = csvGetInt(csv,  this.GetHeadIndex(  "value"  )   );
			config.zh_cn_description = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_description"  )   );
			config.pre_id = csvGetInt(csv,  this.GetHeadIndex(  "pre_id"  )   );
			config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );


			this.addConfig(config);
        }
	}
}