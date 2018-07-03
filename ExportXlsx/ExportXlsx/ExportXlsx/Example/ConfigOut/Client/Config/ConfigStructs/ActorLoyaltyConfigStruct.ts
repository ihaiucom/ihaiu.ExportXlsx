/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class ActorLoyaltyConfigStruct extends BaseConfig
	{
	

		id : number;
		lv : number;
		exp : number;
		max_lv : number;
		cn_tips : string;





		
		get tips()
		{
			return this.cn_tips
		}
	}


}