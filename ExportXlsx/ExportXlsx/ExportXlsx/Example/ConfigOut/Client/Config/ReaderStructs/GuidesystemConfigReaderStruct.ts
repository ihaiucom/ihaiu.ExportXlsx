/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class GuidesystemConfigReaderStruct extends CsvConfigRender<    GuidesystemConfig      >
	{
		path = "Guidesystem";


        ParseCsv(csv: string[] )
        {
			let config = new GuidesystemConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.group = csvGetInt(csv,  this.GetHeadIndex(  "group"  )   );
			config.order = csvGetInt(csv,  this.GetHeadIndex(  "order"  )   );
			config.path = csvGetString(csv,  this.GetHeadIndex(  "path"  )   );
			config.assistant = csvGetBoolean(csv,  this.GetHeadIndex(  "assistant"  )   );
			config.position =  DTVector2.parse(       csvGetString(csv,  this.GetHeadIndex(  "position"  )   )   );
			config.cn_content = csvGetString(csv,  this.GetHeadIndex(  "cn_content"  )   );
			config.en_content = csvGetString(csv,  this.GetHeadIndex(  "en_content"  )   );
			config.finger = csvGetBoolean(csv,  this.GetHeadIndex(  "finger"  )   );
			config.f_direction = csvGetInt(csv,  this.GetHeadIndex(  "f_direction"  )   );
			config.halo = csvGetBoolean(csv,  this.GetHeadIndex(  "halo"  )   );
			config.storyline = csvGetBoolean(csv,  this.GetHeadIndex(  "storyline"  )   );
			config.storyline_id = csvGetInt(csv,  this.GetHeadIndex(  "storyline_id"  )   );

			


			this.addConfig(config);
        }
	}
}