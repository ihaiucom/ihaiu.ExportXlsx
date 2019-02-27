/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import StoryAttributesConfig from "../ConfigExtends/StoryAttributesConfig";


export class StoryAttributesConfigReaderStruct extends CsvConfigRender<    StoryAttributesConfig      >
{
	tableName = "StoryAttributes";


    ParseCsv(csv: string[] )
    {
		let config = new StoryAttributesConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.storyid = csvGetInt(csv,  this.GetHeadIndex(  "storyid"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.level = csvGetInt(csv,  this.GetHeadIndex(  "level"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );
		config.Spectacle = csvGetInt(csv,  this.GetHeadIndex(  "Spectacle"  )   );
		config.Perform = csvGetInt(csv,  this.GetHeadIndex(  "Perform"  )   );
		config.Plot = csvGetInt(csv,  this.GetHeadIndex(  "Plot"  )   );
		config.Art = csvGetInt(csv,  this.GetHeadIndex(  "Art"  )   );
		config.Entertainment = csvGetInt(csv,  this.GetHeadIndex(  "Entertainment"  )   );

		


		this.addConfig(config);
    }
}