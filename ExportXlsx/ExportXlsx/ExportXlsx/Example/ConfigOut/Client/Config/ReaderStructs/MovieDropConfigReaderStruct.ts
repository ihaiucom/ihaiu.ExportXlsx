/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MovieDropConfigReaderStruct extends CsvConfigRender<    MovieDropConfig      >
	{
		path = "MovieDrop";


        ParseCsv(csv: string[] )
        {
			let config = new MovieDropConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.gain_level = csvGetInt(csv,  this.GetHeadIndex(  "gain_level"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.order_num = csvGetInt(csv,  this.GetHeadIndex(  "order_num"  )   );
			config.oreder_qua =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "oreder_qua"  )   )   );
			config.expect = csvGetInt(csv,  this.GetHeadIndex(  "expect"  )   );
			config.drop_num = csvGetInt(csv,  this.GetHeadIndex(  "drop_num"  )   );
			config.drop_item =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "drop_item"  )   )   );
			config.item_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "item_num"  )   )   );

			


			this.addConfig(config);
        }
	}
}