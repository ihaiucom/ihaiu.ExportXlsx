/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class MsgConfigStruct extends BaseConfig
	{
	

		id : number;
		key : string;
		module : string;
		name : string;
		zh_cn_notice : string;





		
		get notice()
		{
			return this.zh_cn_notice
		}
	}


}