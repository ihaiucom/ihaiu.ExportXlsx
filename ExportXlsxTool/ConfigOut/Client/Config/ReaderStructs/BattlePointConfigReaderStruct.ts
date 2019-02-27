/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import BattlePointConfig from "../ConfigExtends/BattlePointConfig";


export class BattlePointConfigReaderStruct extends CsvConfigRender<    BattlePointConfig      >
{
	tableName = "BattlePoint";


    ParseCsv(csv: string[] )
    {
		let config = new BattlePointConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.point =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "point"  )   )   );
		config.rate = csvGetInt(csv,  this.GetHeadIndex(  "rate"  )   );

		


		this.addConfig(config);
    }
}