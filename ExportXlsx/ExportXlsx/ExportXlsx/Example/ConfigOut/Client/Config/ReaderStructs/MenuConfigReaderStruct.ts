/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MenuConfigReaderStruct extends CsvConfigRender<    MenuConfig      >
	{
		path = "Menu";


        ParseCsv(csv: string[] )
        {
			let config = new MenuConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.icon = csvGetString(csv,  this.GetHeadIndex(  "icon"  )   );
			config.moduleName = csvGetString(csv,  this.GetHeadIndex(  "moduleName"  )   );
			config.layer = csvGetInt(csv,  this.GetHeadIndex(  "layer"  )   );
			config.closeOtherType = csvGetInt(csv,  this.GetHeadIndex(  "closeOtherType"  )   );
			config.closeHomeWindow = csvGetBoolean(csv,  this.GetHeadIndex(  "closeHomeWindow"  )   );
			config.cacheTime = csvGetInt(csv,  this.GetHeadIndex(  "cacheTime"  )   );
			config.loaderId = csvGetInt(csv,  this.GetHeadIndex(  "loaderId"  )   );

			


			this.addConfig(config);
        }
	}
}