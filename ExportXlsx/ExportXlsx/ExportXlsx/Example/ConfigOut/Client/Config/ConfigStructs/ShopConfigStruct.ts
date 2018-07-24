/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class ShopConfigStruct extends BaseConfig
	{
	

		id : number;
		type : number;
		zh_cn_name : string;
		item : DTItemNum[];
		cost : DTItemNum;
		period : string;
		limit : DTItemNum;
		row : number;
		columns : number;





		
		get name()
		{
			return this.zh_cn_name
		}
	}


}