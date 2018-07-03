/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class GlobalConfigReaderStruct extends CsvConfigRender<    GlobalConfig      >
	{
		path = "Global";


        ParseCsv(csv: string[] )
        {
			let config = new GlobalConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.key = csvGetString(csv,  this.GetHeadIndex(  "key"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.value = csvGetInt(csv,  this.GetHeadIndex(  "value"  )   );
			config.value4 = csvGetString(csv,  this.GetHeadIndex(  "value4"  )   );
			config.value1 =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "value1"  )   )   );
			config.value2 =  DTlValue2.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "value2"  )   )   );
			config.value3 =  DTlValue3.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "value3"  )   )   );
			config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

			


			this.addConfig(config);
        }
	}
}