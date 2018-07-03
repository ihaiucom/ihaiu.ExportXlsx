/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class MovieAudienceEvaluationConfigStruct extends BaseConfig
	{
	

		id : number;
		zh_cn_name : string;
		sex : number;
		pic : string;
		tips : string;
		min_score : number;
		max_score : number;
		zh_cn_content : string;





		
		get name()
		{
			return this.zh_cn_name
		}
		get content()
		{
			return this.zh_cn_content
		}
	}


}