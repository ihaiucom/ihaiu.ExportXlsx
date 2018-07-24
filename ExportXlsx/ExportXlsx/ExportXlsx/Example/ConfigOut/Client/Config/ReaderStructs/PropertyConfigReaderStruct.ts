/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class PropertyConfigReaderStruct extends CsvConfigRender<    PropertyConfig      >
	{
		path = "Property";


        ParseCsv(csv: string[] )
        {
			let config = new PropertyConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
			config.field = csvGetString(csv,  this.GetHeadIndex(  "field"  )   );
			config.enName = csvGetString(csv,  this.GetHeadIndex(  "enName"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
			config.tip = csvGetString(csv,  this.GetHeadIndex(  "tip"  )   );

			


			this.addConfig(config);
        }
	}
}