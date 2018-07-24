/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class CompleteConfigReaderStruct extends CsvConfigRender<    CompleteConfig      >
	{
		path = "Complete";


        ParseCsv(csv: string[] )
        {
			let config = new CompleteConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.completion = csvGetInt(csv,  this.GetHeadIndex(  "completion"  )   );
			config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );

			


			this.addConfig(config);
        }
	}
}