/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class OrderCompleteConfigReaderStruct extends CsvConfigRender<    OrderCompleteConfig      >
	{
		path = "OrderComplete";


        ParseCsv(csv: string[] )
        {
			let config = new OrderCompleteConfig();


			config.completion = csvGetInt(csv,  this.GetHeadIndex(  "completion"  )   );
			config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );


			this.addConfig(config);
        }
	}
}