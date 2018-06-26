/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class RandomLinesConfigReaderStruct extends CsvConfigRender<    RandomLinesConfig      >
	{
		path = "RandomLines";


        ParseCsv(csv: string[] )
        {
			let config = new RandomLinesConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.lines =  array.parse(       csvGetString(csv,  this.GetHeadIndex(  "lines"  )   )   );
			config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );


			this.addConfig(config);
        }
	}
}