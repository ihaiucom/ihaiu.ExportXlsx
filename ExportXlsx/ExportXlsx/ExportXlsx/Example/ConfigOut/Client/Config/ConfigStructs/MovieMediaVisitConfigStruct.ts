/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class MovieMediaVisitConfigStruct extends BaseConfig
	{
	

		id : number;
		mediaId : number;
		level : number;
		zh_cn_name : string;
		levelup_req : number;
		cost_id : number;
		cost_num : number;
		min_expection : number;
		max_expection : number;
		pic : number;





		
		get name()
		{
			return this.zh_cn_name
		}
	}


}