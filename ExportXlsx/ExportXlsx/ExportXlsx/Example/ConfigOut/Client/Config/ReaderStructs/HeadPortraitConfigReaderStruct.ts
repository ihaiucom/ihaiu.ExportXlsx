/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class HeadPortraitConfigReaderStruct extends CsvConfigRender<    HeadPortraitConfig      >
	{
		path = "HeadPortrait";


        ParseCsv(csv: string[] )
        {
			let config = new HeadPortraitConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.sex = csvGetInt(csv,  this.GetHeadIndex(  "sex"  )   );
			config.unlock =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "unlock"  )   )   );
			config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );

			


			this.addConfig(config);
        }
	}
}