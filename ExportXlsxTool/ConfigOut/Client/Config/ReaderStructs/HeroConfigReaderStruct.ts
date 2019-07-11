/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import HeroConfig from "../ConfigExtends/HeroConfig";


export default class HeroConfigReaderStruct extends CsvConfigRender<    HeroConfig      >
{
	tableName = "Hero";


    ParseCsv(csv: string[] )
    {
		let config = new HeroConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.heroId = csvGetInt(csv,  this.GetHeadIndex(  "heroId"  )   );
		config.level = csvGetInt(csv,  this.GetHeadIndex(  "level"  )   );
		config.blood = csvGetInt(csv,  this.GetHeadIndex(  "blood"  )   );
		config.reloadTime = csvGetInt(csv,  this.GetHeadIndex(  "reloadTime"  )   );
		config.critPower = csvGetInt(csv,  this.GetHeadIndex(  "critPower"  )   );
		config.critRate = csvGetInt(csv,  this.GetHeadIndex(  "critRate"  )   );
		config.hurt = csvGetInt(csv,  this.GetHeadIndex(  "hurt"  )   );
		config.weaponCap = csvGetInt(csv,  this.GetHeadIndex(  "weaponCap"  )   );
		config.reductionRate = csvGetInt(csv,  this.GetHeadIndex(  "reductionRate"  )   );
		config.upgradeCost = csvGetInt(csv,  this.GetHeadIndex(  "upgradeCost"  )   );
		config.res = csvGetString(csv,  this.GetHeadIndex(  "res"  )   );
		config.hw = csvGetInt(csv,  this.GetHeadIndex(  "hw"  )   );
		config.hh = csvGetInt(csv,  this.GetHeadIndex(  "hh"  )   );

		


		this.addConfig(config);
    }
}