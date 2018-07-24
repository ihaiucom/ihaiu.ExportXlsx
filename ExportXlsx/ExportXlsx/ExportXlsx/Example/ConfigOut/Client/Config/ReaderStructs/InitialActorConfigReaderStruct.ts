/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class InitialActorConfigReaderStruct extends CsvConfigRender<    InitialActorConfig      >
	{
		path = "InitialActor";


        ParseCsv(csv: string[] )
        {
			let config = new InitialActorConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.actor_id = csvGetInt(csv,  this.GetHeadIndex(  "actor_id"  )   );

			


			this.addConfig(config);
        }
	}
}