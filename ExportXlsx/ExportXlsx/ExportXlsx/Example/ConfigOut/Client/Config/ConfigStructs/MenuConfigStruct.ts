/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class MenuConfigStruct extends BaseConfig
	{
	

		id : number;
		zh_cn_name : string;
		icon : number;
		moduleName : string;
		layer : number;
		closeOtherType : number;
		closeHomeWindow : boolean;
		cacheTime : number;
		loaderId : number;
		barType : number;
		barIndex : number;





		
		get name()
		{
			return this.zh_cn_name
		}
	}


}