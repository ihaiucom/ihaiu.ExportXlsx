/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ContinueConfig from "../ConfigExtends/ContinueConfig";


export default class ContinueConfigReaderStruct extends CsvConfigRender<    ContinueConfig      >
{
	tableName = "Continue";


    ParseCsv(csv: string[] )
    {
		let config = new ContinueConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );

		


		this.addConfig(config);
    }
}