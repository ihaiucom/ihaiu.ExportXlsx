/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class ProduceSouvenirConfigReaderStruct extends CsvConfigRender<    ProduceSouvenirConfig      >
	{
		path = "ProduceSouvenir";


        ParseCsv(csv: string[] )
        {
			let config = new ProduceSouvenirConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.once = csvGetInt(csv,  this.GetHeadIndex(  "once"  )   );
			config.max = csvGetInt(csv,  this.GetHeadIndex(  "max"  )   );

			


			this.addConfig(config);
        }
	}
}