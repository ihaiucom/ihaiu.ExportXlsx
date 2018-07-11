/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class CompoundConfigReaderStruct extends CsvConfigRender<    CompoundConfig      >
	{
		path = "Compound";


        ParseCsv(csv: string[] )
        {
			let config = new CompoundConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.name_tips = csvGetString(csv,  this.GetHeadIndex(  "name_tips"  )   );
			config.syn_item = csvGetInt(csv,  this.GetHeadIndex(  "syn_item"  )   );
			config.num_req = csvGetInt(csv,  this.GetHeadIndex(  "num_req"  )   );
			config.split_list =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "split_list"  )   )   );

			


			this.addConfig(config);
        }
	}
}