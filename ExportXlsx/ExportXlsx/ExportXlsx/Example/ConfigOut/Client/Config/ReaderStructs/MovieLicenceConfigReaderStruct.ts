/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MovieLicenceConfigReaderStruct extends CsvConfigRender<    MovieLicenceConfig      >
	{
		path = "MovieLicence";


        ParseCsv(csv: string[] )
        {
			let config = new MovieLicenceConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );
			config.cool_down = csvGetInt(csv,  this.GetHeadIndex(  "cool_down"  )   );

			


			this.addConfig(config);
        }
	}
}