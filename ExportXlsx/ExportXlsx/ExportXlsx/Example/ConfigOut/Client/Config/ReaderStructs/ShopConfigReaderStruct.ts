/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class ShopConfigReaderStruct extends CsvConfigRender<    ShopConfig      >
	{
		path = "Shop";


        ParseCsv(csv: string[] )
        {
			let config = new ShopConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.item =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "item"  )   )   );
			config.cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
			config.period = csvGetString(csv,  this.GetHeadIndex(  "period"  )   );
			config.limit =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "limit"  )   )   );
			config.row = csvGetInt(csv,  this.GetHeadIndex(  "row"  )   );
			config.columns = csvGetInt(csv,  this.GetHeadIndex(  "columns"  )   );

			


			this.addConfig(config);
        }
	}
}