/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class DailySignConfigReaderStruct extends CsvConfigRender<    DailySignConfig      >
	{
		path = "DailySign";


        ParseCsv(csv: string[] )
        {
			let config = new DailySignConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.cycle = csvGetInt(csv,  this.GetHeadIndex(  "cycle"  )   );
			config.day = csvGetInt(csv,  this.GetHeadIndex(  "day"  )   );
			config.reward =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
			config.cn = csvGetString(csv,  this.GetHeadIndex(  "cn"  )   );


			this.addConfig(config);
        }
	}
}