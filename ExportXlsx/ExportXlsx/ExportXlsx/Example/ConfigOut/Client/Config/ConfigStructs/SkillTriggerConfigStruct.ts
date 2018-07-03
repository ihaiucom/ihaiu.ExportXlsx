/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class SkillTriggerConfigStruct extends BaseConfig
	{
	

		id : number;
		trigger : number;
		value : number;
		cn_tips : string;





		
		get tips()
		{
			return this.cn_tips
		}
	}


}