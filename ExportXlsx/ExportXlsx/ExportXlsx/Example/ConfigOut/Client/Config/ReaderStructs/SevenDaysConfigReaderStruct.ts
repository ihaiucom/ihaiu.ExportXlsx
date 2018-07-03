/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class SevenDaysConfigReaderStruct extends CsvConfigRender<    SevenDaysConfig      >
	{
		path = "SevenDays";


        ParseCsv(csv: string[] )
        {
			let config = new SevenDaysConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.day = csvGetInt(csv,  this.GetHeadIndex(  "day"  )   );
			config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
			config.cn = csvGetString(csv,  this.GetHeadIndex(  "cn"  )   );

			


			this.addConfig(config);
        }
	}
}