/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import RewardConfig from "../ConfigExtends/RewardConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class RewardConfigReaderStruct extends CsvConfigRender<    RewardConfig      >
{
	tableName = "Reward";


    ParseCsv(csv: string[] )
    {
		let config = new RewardConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.Use_type = csvGetInt(csv,  this.GetHeadIndex(  "Use_type"  )   );
		config.Item =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "Item"  )   )   );

		


		this.addConfig(config);
    }
}