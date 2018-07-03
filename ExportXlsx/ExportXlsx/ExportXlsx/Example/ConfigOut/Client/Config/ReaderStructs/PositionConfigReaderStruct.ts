/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class PositionConfigReaderStruct extends CsvConfigRender<    PositionConfig      >
	{
		path = "Position";


        ParseCsv(csv: string[] )
        {
			let config = new PositionConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.position_cost_con = csvGetInt(csv,  this.GetHeadIndex(  "position_cost_con"  )   );
			config.position_con = csvGetInt(csv,  this.GetHeadIndex(  "position_con"  )   );

			


			this.addConfig(config);
        }
	}
}