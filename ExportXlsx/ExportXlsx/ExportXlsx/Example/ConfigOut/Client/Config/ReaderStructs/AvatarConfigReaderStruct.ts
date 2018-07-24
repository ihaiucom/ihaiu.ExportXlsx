/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class AvatarConfigReaderStruct extends CsvConfigRender<    AvatarConfig      >
	{
		path = "Avatar";


        ParseCsv(csv: string[] )
        {
			let config = new AvatarConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.en_name = csvGetString(csv,  this.GetHeadIndex(  "en_name"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.body_icon = csvGetString(csv,  this.GetHeadIndex(  "body_icon"  )   );
			config.icon = csvGetString(csv,  this.GetHeadIndex(  "icon"  )   );
			config.piece_icon = csvGetString(csv,  this.GetHeadIndex(  "piece_icon"  )   );
			config.model_skin = csvGetString(csv,  this.GetHeadIndex(  "model_skin"  )   );
			config.model_bones = csvGetString(csv,  this.GetHeadIndex(  "model_bones"  )   );
			config.bg_pic = csvGetString(csv,  this.GetHeadIndex(  "bg_pic"  )   );

			


			this.addConfig(config);
        }
	}
}