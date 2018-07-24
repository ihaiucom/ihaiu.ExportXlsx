/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class OrderConfigStruct extends BaseConfig
	{
	

		id : number;
		zh_cn_name1 : string;
		zh_cn_name2 : string;
		icon : number;
		block : number;
		need : DTItemNum[];
		quality : number;
		reward : DTItemNum;
		expect : number;





		
		get name1()
		{
			return this.zh_cn_name1
		}
		get name2()
		{
			return this.zh_cn_name2
		}
	}


}