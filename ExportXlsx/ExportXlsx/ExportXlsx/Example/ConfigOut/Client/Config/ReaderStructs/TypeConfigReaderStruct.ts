/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class TypeConfigReaderStruct extends CsvConfigRender<    TypeConfig      >
	{
		path = "Type";


        ParseCsv(csv: string[] )
        {
			let config = new TypeConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.field = csvGetString(csv,  this.GetHeadIndex(  "field"  )   );
			config.enName = csvGetString(csv,  this.GetHeadIndex(  "enName"  )   );
			config.cnName = csvGetString(csv,  this.GetHeadIndex(  "cnName"  )   );
			config.tip = csvGetString(csv,  this.GetHeadIndex(  "tip"  )   );


			this.addConfig(config);
        }
	}
}