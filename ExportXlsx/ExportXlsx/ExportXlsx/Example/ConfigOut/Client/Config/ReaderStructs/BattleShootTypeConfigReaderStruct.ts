/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class BattleShootTypeConfigReaderStruct extends CsvConfigRender<    BattleShootTypeConfig      >
	{
		path = "BattleShootType";


        ParseCsv(csv: string[] )
        {
			let config = new BattleShootTypeConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.man = csvGetInt(csv,  this.GetHeadIndex(  "man"  )   );
			config.woman = csvGetInt(csv,  this.GetHeadIndex(  "woman"  )   );
			config.child = csvGetInt(csv,  this.GetHeadIndex(  "child"  )   );

			


			this.addConfig(config);
        }
	}
}