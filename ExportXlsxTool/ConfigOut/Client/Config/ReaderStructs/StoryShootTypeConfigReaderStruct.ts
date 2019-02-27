/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import StoryShootTypeConfig from "../ConfigExtends/StoryShootTypeConfig";


export class StoryShootTypeConfigReaderStruct extends CsvConfigRender<    StoryShootTypeConfig      >
{
	tableName = "StoryShootType";


    ParseCsv(csv: string[] )
    {
		let config = new StoryShootTypeConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.cn = csvGetString(csv,  this.GetHeadIndex(  "cn"  )   );

		
		config["2201"] =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "2201"  )   )   );
		config["2202"] =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "2202"  )   )   );
		config["2203"] =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "2203"  )   )   );
		config["2204"] =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "2204"  )   )   );
		config["2205"] =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "2205"  )   )   );
		config["2206"] =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "2206"  )   )   );
		config["2207"] =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "2207"  )   )   );
		config["2208"] =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "2208"  )   )   );


		this.addConfig(config);
    }
}