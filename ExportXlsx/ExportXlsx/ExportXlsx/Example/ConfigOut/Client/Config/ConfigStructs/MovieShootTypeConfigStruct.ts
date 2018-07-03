/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class MovieShootTypeConfigStruct extends BaseConfig
	{
	

		id : number;
		zh_cn_name : string;
		zh_cn_type_des : string;
		item_id : number;
		item_num : number;
		pic : number;





		
		get name()
		{
			return this.zh_cn_name
		}
		get type_des()
		{
			return this.zh_cn_type_des
		}
	}


}