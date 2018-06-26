/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class ActorTrainConfigReaderStruct extends CsvConfigRender<    ActorTrainConfig      >
	{
		path = "ActorTrain";


        ParseCsv(csv: string[] )
        {
			let config = new ActorTrainConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.train_num = csvGetInt(csv,  this.GetHeadIndex(  "train_num"  )   );
			config.train_type = csvGetInt(csv,  this.GetHeadIndex(  "train_type"  )   );
			config.en_name = csvGetString(csv,  this.GetHeadIndex(  "en_name"  )   );
			config.cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
			config.property_1 = csvGetInt(csv,  this.GetHeadIndex(  "property_1"  )   );
			config.property_1_interval =  DTRandomInterval.parse(       csvGetString(csv,  this.GetHeadIndex(  "property_1_interval"  )   )   );
			config.property_2 = csvGetInt(csv,  this.GetHeadIndex(  "property_2"  )   );
			config.property_2_interval =  DTRandomInterval.parse(       csvGetString(csv,  this.GetHeadIndex(  "property_2_interval"  )   )   );
			config.property_3 = csvGetInt(csv,  this.GetHeadIndex(  "property_3"  )   );
			config.property_3_interval =  DTRandomInterval.parse(       csvGetString(csv,  this.GetHeadIndex(  "property_3_interval"  )   )   );
			config.scene_name = csvGetString(csv,  this.GetHeadIndex(  "scene_name"  )   );
			config.action = csvGetInt(csv,  this.GetHeadIndex(  "action"  )   );
			config.cn_tips = csvGetString(csv,  this.GetHeadIndex(  "cn_tips"  )   );


			this.addConfig(config);
        }
	}
}