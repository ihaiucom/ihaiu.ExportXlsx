/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MapConfig from "../ConfigExtends/MapConfig";


export default class MapConfigReaderStruct extends CsvConfigRender<    MapConfig      >
{
	tableName = "Map";


    ParseCsv(csv: string[] )
    {
		let config = new MapConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.g = csvGetInt(csv,  this.GetHeadIndex(  "g"  )   );
		config.vx = csvGetInt(csv,  this.GetHeadIndex(  "vx"  )   );
		config.vy = csvGetInt(csv,  this.GetHeadIndex(  "vy"  )   );
		config.maxt = csvGetInt(csv,  this.GetHeadIndex(  "maxt"  )   );
		config.mint = csvGetInt(csv,  this.GetHeadIndex(  "mint"  )   );
		config.maxPillar = csvGetInt(csv,  this.GetHeadIndex(  "maxPillar"  )   );

		


		this.addConfig(config);
    }
}