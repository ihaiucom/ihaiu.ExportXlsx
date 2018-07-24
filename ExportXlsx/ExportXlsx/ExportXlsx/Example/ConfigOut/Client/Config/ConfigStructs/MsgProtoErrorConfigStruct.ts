/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class MsgProtoErrorConfigStruct extends BaseConfig
	{
	

		id : number;
		key : string;
		module : string;
		zh_cn_notice : string;





		
		get notice()
		{
			return this.zh_cn_notice
		}
	}


}