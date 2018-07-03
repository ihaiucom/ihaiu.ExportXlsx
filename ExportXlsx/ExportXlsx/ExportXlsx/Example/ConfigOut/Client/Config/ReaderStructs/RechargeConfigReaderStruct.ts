/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class RechargeConfigReaderStruct extends CsvConfigRender<    RechargeConfig      >
	{
		path = "Recharge";


        ParseCsv(csv: string[] )
        {
			let config = new RechargeConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.item =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "item"  )   )   );
			config.gift =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "gift"  )   )   );
			config.cost_dollar = csvGetInt(csv,  this.GetHeadIndex(  "cost_dollar"  )   );
			config.double = csvGetInt(csv,  this.GetHeadIndex(  "double"  )   );
			config.go = csvGetInt(csv,  this.GetHeadIndex(  "go"  )   );
			config.term = csvGetInt(csv,  this.GetHeadIndex(  "term"  )   );

			


			this.addConfig(config);
        }
	}
}