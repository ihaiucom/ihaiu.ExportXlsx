/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class MenuConfigStruct extends BaseConfig
	{
	
		// 101 : number;
		static KEY_101 = "101";

		// 102 : number[];
		static KEY_102 = "102";


		id : number;
		zh_cn_name : string;
		icon : string;
		moduleName : string;
		layer : number;
		closeOtherType : number;
		closeHomeWindow : boolean;
		cacheTime : number;
		loaderId : number;





		
		get name()
		{
			return this.zh_cn_name
		}
	}


}