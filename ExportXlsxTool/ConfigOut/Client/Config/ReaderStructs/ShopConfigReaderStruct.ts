/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ShopConfig from "../ConfigExtends/ShopConfig";


export default class ShopConfigReaderStruct extends CsvConfigRender<    ShopConfig      >
{
	tableName = "Shop";


    ParseCsv(csv: string[] )
    {
		let config = new ShopConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.space = csvGetInt(csv,  this.GetHeadIndex(  "space"  )   );
		config.count = csvGetInt(csv,  this.GetHeadIndex(  "count"  )   );
		config.oldPrice = csvGetInt(csv,  this.GetHeadIndex(  "oldPrice"  )   );
		config.nowPrice = csvGetInt(csv,  this.GetHeadIndex(  "nowPrice"  )   );
		config.currency = csvGetInt(csv,  this.GetHeadIndex(  "currency"  )   );

		


		this.addConfig(config);
    }
}