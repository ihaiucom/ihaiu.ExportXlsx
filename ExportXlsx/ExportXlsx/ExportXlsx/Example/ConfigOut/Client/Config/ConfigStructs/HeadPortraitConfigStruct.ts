/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class HeadPortraitConfigStruct extends BaseConfig
	{
	

		id : number;
		zh_cn_name : string;
		sex : number;
		unlock : DTItemNum;
		icon : number;





		
		get name()
		{
			return this.zh_cn_name
		}
	}


}