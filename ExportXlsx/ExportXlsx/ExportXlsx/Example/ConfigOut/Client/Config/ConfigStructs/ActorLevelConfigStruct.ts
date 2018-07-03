/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class ActorLevelConfigStruct extends BaseConfig
	{
	

		id : number;
		lv : number;
		cost : DTItemNum;
		culture : number;
		assets : number;
		stamina : number;
		paycheck : number;
		spectacle : number;
		perform : number;
		plot : number;
		art : number;
		entertainment : number;
		cn_tips : string;





		
		get tips()
		{
			return this.cn_tips
		}
	}


}