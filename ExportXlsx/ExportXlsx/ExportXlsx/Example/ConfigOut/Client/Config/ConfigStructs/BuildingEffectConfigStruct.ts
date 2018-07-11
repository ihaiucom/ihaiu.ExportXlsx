/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class BuildingEffectConfigStruct extends BaseConfig
	{
	

		id : number;
		tips : string;
		level : number;
		zh_cn_effect_des : string;
		effect : number;
		par1 : number;
		par2 : number;
		par3 : number;
		par4 : number;
		par5 : number;





		
		get effect_des()
		{
			return this.zh_cn_effect_des
		}
	}


}