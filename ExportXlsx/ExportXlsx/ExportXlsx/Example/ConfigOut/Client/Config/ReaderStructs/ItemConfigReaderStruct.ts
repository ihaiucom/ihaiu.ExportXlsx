/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class ItemConfigReaderStruct extends CsvConfigRender<    ItemConfig      >
	{
		path = "Item";


        ParseCsv(csv: string[] )
        {
			let config = new ItemConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.item_des = csvGetString(csv,  this.GetHeadIndex(  "item_des"  )   );
			config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
			config.star = csvGetInt(csv,  this.GetHeadIndex(  "star"  )   );
			config.name_tips = csvGetString(csv,  this.GetHeadIndex(  "name_tips"  )   );
			config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
			config.max_num = csvGetInt(csv,  this.GetHeadIndex(  "max_num"  )   );
			config.get_way =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "get_way"  )   )   );
			config.can_use = csvGetBoolean(csv,  this.GetHeadIndex(  "can_use"  )   );
			config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
			config.can_sell = csvGetBoolean(csv,  this.GetHeadIndex(  "can_sell"  )   );
			config.price = csvGetInt(csv,  this.GetHeadIndex(  "price"  )   );
			config.syn_id = csvGetInt(csv,  this.GetHeadIndex(  "syn_id"  )   );
			config.actor_id = csvGetInt(csv,  this.GetHeadIndex(  "actor_id"  )   );
			config.actor_num = csvGetInt(csv,  this.GetHeadIndex(  "actor_num"  )   );


			this.addConfig(config);
        }
	}
}