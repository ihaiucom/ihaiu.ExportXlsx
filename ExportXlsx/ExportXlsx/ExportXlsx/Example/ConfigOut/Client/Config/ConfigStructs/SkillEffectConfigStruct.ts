/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class SkillEffectConfigStruct extends BaseConfig
	{
	

		id : number;
		effect : number;
		cn_tips : string;





		
		get tips()
		{
			return this.cn_tips
		}
	}


}