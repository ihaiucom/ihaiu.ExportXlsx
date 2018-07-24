/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class MovieAdaptationMsgConfigStruct extends BaseConfig
	{
	

		id : number;
		name : string;
		adaptation_min : number;
		adaptation_max : number;
		zh_cn_msg : string;





		
		get msg()
		{
			return this.zh_cn_msg
		}
	}


}