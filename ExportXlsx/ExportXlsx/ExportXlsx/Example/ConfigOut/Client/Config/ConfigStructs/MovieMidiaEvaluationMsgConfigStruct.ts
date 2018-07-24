/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class MovieMidiaEvaluationMsgConfigStruct extends BaseConfig
	{
	

		id : number;
		name : string;
		score_min : number;
		scor_max : number;
		zh_cn_msg : string;





		
		get msg()
		{
			return this.zh_cn_msg
		}
	}


}