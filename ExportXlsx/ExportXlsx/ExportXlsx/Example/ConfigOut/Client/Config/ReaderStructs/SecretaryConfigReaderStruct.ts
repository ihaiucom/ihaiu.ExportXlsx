/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class SecretaryConfigReaderStruct extends CsvConfigRender<    SecretaryConfig      >
	{
		path = "Secretary";


        ParseCsv(csv: string[] )
        {
			let config = new SecretaryConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.key = csvGetString(csv,  this.GetHeadIndex(  "key"  )   );
			config.cn = csvGetString(csv,  this.GetHeadIndex(  "cn"  )   );
			config.par = csvGetInt(csv,  this.GetHeadIndex(  "par"  )   );

			


			this.addConfig(config);
        }
	}
}