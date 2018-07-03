/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class PerformConfigReaderStruct extends CsvConfigRender<    PerformConfig      >
	{
		path = "Perform";


        ParseCsv(csv: string[] )
        {
			let config = new PerformConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
			config.building = csvGetInt(csv,  this.GetHeadIndex(  "building"  )   );
			config.group = csvGetInt(csv,  this.GetHeadIndex(  "group"  )   );
			config.model = csvGetInt(csv,  this.GetHeadIndex(  "model"  )   );

			


			this.addConfig(config);
        }
	}
}