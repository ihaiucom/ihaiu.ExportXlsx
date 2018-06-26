/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class ActorAssetsConfigReaderStruct extends CsvConfigRender<    ActorAssetsConfig      >
	{
		path = "ActorAssets";


        ParseCsv(csv: string[] )
        {
			let config = new ActorAssetsConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
			config.lv = csvGetInt(csv,  this.GetHeadIndex(  "lv"  )   );
			config.item = csvGetInt(csv,  this.GetHeadIndex(  "item"  )   );
			config.number = csvGetInt(csv,  this.GetHeadIndex(  "number"  )   );
			config.max_num = csvGetInt(csv,  this.GetHeadIndex(  "max_num"  )   );
			config.actor_property = csvGetInt(csv,  this.GetHeadIndex(  "actor_property"  )   );
			config.value = csvGetInt(csv,  this.GetHeadIndex(  "value"  )   );
			config.cn_tips = csvGetString(csv,  this.GetHeadIndex(  "cn_tips"  )   );


			this.addConfig(config);
        }
	}
}