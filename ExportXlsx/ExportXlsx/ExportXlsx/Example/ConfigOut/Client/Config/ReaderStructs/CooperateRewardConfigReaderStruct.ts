/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class CooperateRewardConfigReaderStruct extends CsvConfigRender<    CooperateRewardConfig      >
	{
		path = "CooperateReward";


        ParseCsv(csv: string[] )
        {
			let config = new CooperateRewardConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );
			config.first_id = csvGetInt(csv,  this.GetHeadIndex(  "first_id"  )   );
			config.first_num = csvGetInt(csv,  this.GetHeadIndex(  "first_num"  )   );
			config.second_id = csvGetInt(csv,  this.GetHeadIndex(  "second_id"  )   );
			config.second_num = csvGetInt(csv,  this.GetHeadIndex(  "second_num"  )   );
			config.third_id = csvGetInt(csv,  this.GetHeadIndex(  "third_id"  )   );
			config.third_num = csvGetInt(csv,  this.GetHeadIndex(  "third_num"  )   );
			config.fourth_id = csvGetInt(csv,  this.GetHeadIndex(  "fourth_id"  )   );
			config.fourth_num = csvGetInt(csv,  this.GetHeadIndex(  "fourth_num"  )   );
			config.fifth_id = csvGetInt(csv,  this.GetHeadIndex(  "fifth_id"  )   );
			config.fifth_num = csvGetInt(csv,  this.GetHeadIndex(  "fifth_num"  )   );
			config.sixth_id = csvGetInt(csv,  this.GetHeadIndex(  "sixth_id"  )   );
			config.six_num = csvGetInt(csv,  this.GetHeadIndex(  "six_num"  )   );

			


			this.addConfig(config);
        }
	}
}