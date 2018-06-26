/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MovieRandomNameConfigReaderStruct extends CsvConfigRender<    MovieRandomNameConfig      >
	{
		path = "MovieRandomName";


        ParseCsv(csv: string[] )
        {
			let config = new MovieRandomNameConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.names =  toStringArray(       csvGetString(csv,  this.GetHeadIndex(  "names"  )   )   );
			config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );


			this.addConfig(config);
        }
	}
}