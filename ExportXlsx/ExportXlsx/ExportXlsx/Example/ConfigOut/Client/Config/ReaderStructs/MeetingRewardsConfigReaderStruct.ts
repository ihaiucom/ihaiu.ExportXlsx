/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MeetingRewardsConfigReaderStruct extends CsvConfigRender<    MeetingRewardsConfig      >
	{
		path = "MeetingRewards";


        ParseCsv(csv: string[] )
        {
			let config = new MeetingRewardsConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.rewards =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "rewards"  )   )   );
			config.expect = csvGetInt(csv,  this.GetHeadIndex(  "expect"  )   );
			config.rate = csvGetInt(csv,  this.GetHeadIndex(  "rate"  )   );
			config.cn = csvGetString(csv,  this.GetHeadIndex(  "cn"  )   );


			this.addConfig(config);
        }
	}
}