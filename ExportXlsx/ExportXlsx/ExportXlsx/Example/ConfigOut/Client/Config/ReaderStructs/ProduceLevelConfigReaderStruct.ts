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


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.line = csvGetInt(csv,  this.GetHeadIndex(  "line"  )   );
			config.save = csvGetInt(csv,  this.GetHeadIndex(  "save"  )   );
			config.time = csvGetInt(csv,  this.GetHeadIndex(  "time"  )   );
			config.output_initial = csvGetInt(csv,  this.GetHeadIndex(  "output_initial"  )   );
			config.time_add = csvGetInt(csv,  this.GetHeadIndex(  "time_add"  )   );
			config.cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
			config.limit_grade =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "limit_grade"  )   )   );

			


			this.addConfig(config);
        }
	}
}