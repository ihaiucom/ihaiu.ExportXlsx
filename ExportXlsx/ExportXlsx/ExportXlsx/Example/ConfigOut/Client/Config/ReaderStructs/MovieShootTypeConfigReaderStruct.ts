/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MovieShootTypeConfigReaderStruct extends CsvConfigRender<    MovieShootTypeConfig      >
	{
		path = "MovieShootType";


        ParseCsv(csv: string[] )
        {
			let config = new MovieShootTypeConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.name_tips = csvGetString(csv,  this.GetHeadIndex(  "name_tips"  )   );
			config.type_des = csvGetString(csv,  this.GetHeadIndex(  "type_des"  )   );
			config.item_id = csvGetInt(csv,  this.GetHeadIndex(  "item_id"  )   );
			config.item_num = csvGetInt(csv,  this.GetHeadIndex(  "item_num"  )   );
			config.pic = csvGetInt(csv,  this.GetHeadIndex(  "pic"  )   );


			this.addConfig(config);
        }
	}
}