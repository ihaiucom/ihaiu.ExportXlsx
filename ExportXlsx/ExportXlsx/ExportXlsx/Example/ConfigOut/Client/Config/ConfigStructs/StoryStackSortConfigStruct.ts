/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class StoryStackSortConfigStruct extends BaseConfig
	{
	

		id : number;
		zh_cn_name : string;
		scripts : number[];
		rewards : DTItemNum[];
		addition_scene : DTStoryEffect[];





		
		get name()
		{
			return this.zh_cn_name
		}
	}


}