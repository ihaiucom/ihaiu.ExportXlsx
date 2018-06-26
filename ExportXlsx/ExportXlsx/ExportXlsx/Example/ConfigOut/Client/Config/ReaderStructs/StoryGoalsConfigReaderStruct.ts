/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class StoryGoalsConfigReaderStruct extends CsvConfigRender<    StoryGoalsConfig      >
	{
		path = "StoryGoals";


        ParseCsv(csv: string[] )
        {
			let config = new StoryGoalsConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.rank = csvGetInt(csv,  this.GetHeadIndex(  "rank"  )   );
			config.property1 = csvGetInt(csv,  this.GetHeadIndex(  "property1"  )   );
			config.value1 = csvGetInt(csv,  this.GetHeadIndex(  "value1"  )   );
			config.property2 = csvGetInt(csv,  this.GetHeadIndex(  "property2"  )   );
			config.value2 = csvGetInt(csv,  this.GetHeadIndex(  "value2"  )   );
			config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );


			this.addConfig(config);
        }
	}
}