/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class CinemaConfigStruct extends BaseConfig
	{
	

		id : number;
		zh_cn_name : string;
		level : number;
		sign_level : number;
		pic : number;
		num : number;
		proportion : number;
		favorite_actor : number;
		increase : number;





		
		get name()
		{
			return this.zh_cn_name
		}
	}


}