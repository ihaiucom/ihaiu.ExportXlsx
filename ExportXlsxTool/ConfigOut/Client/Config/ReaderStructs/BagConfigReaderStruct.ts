/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import BagConfig from "../ConfigExtends/BagConfig";


export default class BagConfigReaderStruct extends CsvConfigRender<    BagConfig      >
{
	tableName = "Bag";


    ParseCsv(csv: string[] )
    {
		let config = new BagConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.itemId = csvGetInt(csv,  this.GetHeadIndex(  "itemId"  )   );
		config.level = csvGetInt(csv,  this.GetHeadIndex(  "level"  )   );
		config.sellPrice = csvGetInt(csv,  this.GetHeadIndex(  "sellPrice"  )   );
		config.stackNumber = csvGetInt(csv,  this.GetHeadIndex(  "stackNumber"  )   );

		


		this.addConfig(config);
    }
}