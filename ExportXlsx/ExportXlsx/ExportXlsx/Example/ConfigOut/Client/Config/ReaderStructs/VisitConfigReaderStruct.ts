/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class VisitConfigReaderStruct extends CsvConfigRender<    VisitConfig      >
	{
		path = "Visit";


        ParseCsv(csv: string[] )
        {
			let config = new VisitConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.actor = csvGetInt(csv,  this.GetHeadIndex(  "actor"  )   );
			config.fans = csvGetInt(csv,  this.GetHeadIndex(  "fans"  )   );
			config.flower = csvGetInt(csv,  this.GetHeadIndex(  "flower"  )   );
			config.zh_cn_fans_speak0 = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_fans_speak0"  )   );
			config.zh_cn_actor_speak0 = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_actor_speak0"  )   );
			config.zh_cn_fans_speak1 = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_fans_speak1"  )   );
			config.zh_cn_actor_speak1 = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_actor_speak1"  )   );
			config.zh_cn_fans_speak2 = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_fans_speak2"  )   );
			config.zh_cn_actor_speak2 = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_actor_speak2"  )   );
			config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
			config.expect = csvGetInt(csv,  this.GetHeadIndex(  "expect"  )   );

			


			this.addConfig(config);
        }
	}
}