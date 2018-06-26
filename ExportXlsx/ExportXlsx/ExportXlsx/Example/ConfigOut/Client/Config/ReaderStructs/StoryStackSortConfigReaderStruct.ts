/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class StoryStackSortConfigReaderStruct extends CsvConfigRender<    StoryStackSortConfig      >
	{
		path = "StoryStackSort";


        ParseCsv(csv: string[] )
        {
			let config = new StoryStackSortConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.scripts =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "scripts"  )   )   );
			config.addition_scene = csvGetInt(csv,  this.GetHeadIndex(  "addition_scene"  )   );
			config.addition_plot = csvGetInt(csv,  this.GetHeadIndex(  "addition_plot"  )   );
			config.addition_performance = csvGetInt(csv,  this.GetHeadIndex(  "addition_performance"  )   );
			config.addition_art = csvGetInt(csv,  this.GetHeadIndex(  "addition_art"  )   );
			config.addition_entertainment = csvGetInt(csv,  this.GetHeadIndex(  "addition_entertainment"  )   );


			this.addConfig(config);
        }
	}
}