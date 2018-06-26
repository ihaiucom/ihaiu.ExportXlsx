/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class BuildPropertyConfigReaderStruct extends CsvConfigRender<    BuildPropertyConfig      >
	{
		path = "BuildProperty";


        ParseCsv(csv: string[] )
        {
			let config = new BuildPropertyConfig();


			config.下映后的持续收益时间 =  名称.parse(       csvGetString(csv,  this.GetHeadIndex(  "下映后的持续收益时间"  )   )   );


			this.addConfig(config);
        }
	}
}