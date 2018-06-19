/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace configs
{

	export class BuildingEffectConfigReaderStruct extends CsvConfigRender<    BuildingEffectConfig      >
	{
		path = "BuildingEffect";


        ParseCsv(csv: string[] )
        {
			let config = new BuildingEffectConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );
			config.effect_des = csvGetString(csv,  this.GetHeadIndex(  "effect_des"  )   );
			config.effect_tips = csvGetString(csv,  this.GetHeadIndex(  "effect_tips"  )   );
			config.effect = csvGetInt(csv,  this.GetHeadIndex(  "effect"  )   );
			config.par1 = csvGetInt(csv,  this.GetHeadIndex(  "par1"  )   );
			config.par2 = csvGetInt(csv,  this.GetHeadIndex(  "par2"  )   );
			config.par3 = csvGetInt(csv,  this.GetHeadIndex(  "par3"  )   );
			config.par4 = csvGetInt(csv,  this.GetHeadIndex(  "par4"  )   );
			config.par5 = csvGetInt(csv,  this.GetHeadIndex(  "par5"  )   );


			this.addConfig(config);
        }
	}
}