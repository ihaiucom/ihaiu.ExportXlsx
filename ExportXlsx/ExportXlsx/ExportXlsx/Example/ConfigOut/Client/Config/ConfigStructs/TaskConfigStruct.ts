/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class TaskConfigStruct extends BaseConfig
	{
	

		id : number;
		zh_cn_name : string;
		unlock : number;
		goal : number;
		type : number;
		reward : DTItemNum[];
		Complete : number;
		pre_id : number;





		
		get name()
		{
			return this.zh_cn_name
		}
	}


}