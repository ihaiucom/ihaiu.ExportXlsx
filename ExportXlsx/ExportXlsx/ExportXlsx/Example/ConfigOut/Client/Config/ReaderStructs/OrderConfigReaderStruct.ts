/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class OrderConfigReaderStruct extends CsvConfigRender<    OrderConfig      >
	{
		path = "Order";


        ParseCsv(csv: string[] )
        {
			let config = new OrderConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.zh_cn_name1 = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name1"  )   );
			config.zh_cn_name2 = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name2"  )   );
			config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
			config.block = csvGetInt(csv,  this.GetHeadIndex(  "block"  )   );
			config.quality = csvGetInt(csv,  this.GetHeadIndex(  "quality"  )   );
			config.need =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "need"  )   )   );
			config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
			config.expect = csvGetInt(csv,  this.GetHeadIndex(  "expect"  )   );


			this.addConfig(config);
        }
	}
}