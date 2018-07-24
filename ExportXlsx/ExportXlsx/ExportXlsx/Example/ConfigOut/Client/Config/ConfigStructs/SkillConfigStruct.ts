/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class SkillConfigStruct extends BaseConfig
	{
	

		id : number;
		group_id : number;
		lv : number;
		exp : number;
		en_name : string;
		cn_name : string;
		en_tips : string;
		cn_tips : string;
		icon : number;
		trigger : number[];
		effect : number;
		value : number;
		stamina : number;





		
		get name()
		{
			return this.cn_name
		}
		get tips()
		{
			return this.cn_tips
		}
	}


}