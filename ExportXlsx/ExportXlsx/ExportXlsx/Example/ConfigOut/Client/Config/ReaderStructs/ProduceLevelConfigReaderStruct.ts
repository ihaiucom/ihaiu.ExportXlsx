/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class ProduceLevelConfigReaderStruct extends CsvConfigRender<    ProduceLevelConfig      >
	{
		path = "ProduceLevel";


        ParseCsv(csv: string[] )
        {
			let config = new ProduceLevelConfig();


			config.level = csvGetInt(csv,  this.GetHeadIndex(  "level"  )   );
			config.line = csvGetInt(csv,  this.GetHeadIndex(  "line"  )   );
			config.save = csvGetInt(csv,  this.GetHeadIndex(  "save"  )   );
			config.time = csvGetInt(csv,  this.GetHeadIndex(  "time"  )   );
			config.output_initial = csvGetInt(csv,  this.GetHeadIndex(  "output_initial"  )   );
			config.cost = csvGetInt(csv,  this.GetHeadIndex(  "cost"  )   );


			this.addConfig(config);
        }
	}
}