/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class GiftPackageConfigReaderStruct extends CsvConfigRender<    GiftPackageConfig      >
	{
		path = "GiftPackage";


        ParseCsv(csv: string[] )
        {
			let config = new GiftPackageConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.plat = csvGetInt(csv,  this.GetHeadIndex(  "plat"  )   );
			config.country = csvGetInt(csv,  this.GetHeadIndex(  "country"  )   );
			config.gift =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "gift"  )   )   );
			config.cn = csvGetString(csv,  this.GetHeadIndex(  "cn"  )   );

			


			this.addConfig(config);
        }
	}
}