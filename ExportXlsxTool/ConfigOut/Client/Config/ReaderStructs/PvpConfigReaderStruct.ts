/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import PvpConfig from "../ConfigExtends/PvpConfig";


export default class PvpConfigReaderStruct extends CsvConfigRender<    PvpConfig      >
{
	tableName = "Pvp";


    ParseCsv(csv: string[] )
    {
		let config = new PvpConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.pos = csvGetInt(csv,  this.GetHeadIndex(  "pos"  )   );
		config.length = csvGetInt(csv,  this.GetHeadIndex(  "length"  )   );
		config.r = csvGetInt(csv,  this.GetHeadIndex(  "r"  )   );
		config.g = csvGetInt(csv,  this.GetHeadIndex(  "g"  )   );
		config.b = csvGetInt(csv,  this.GetHeadIndex(  "b"  )   );
		config.x = csvGetInt(csv,  this.GetHeadIndex(  "x"  )   );
		config.y = csvGetInt(csv,  this.GetHeadIndex(  "y"  )   );
		config.delta = csvGetInt(csv,  this.GetHeadIndex(  "delta"  )   );
		config.bodyScale = csvGetInt(csv,  this.GetHeadIndex(  "bodyScale"  )   );

		


		this.addConfig(config);
    }
}