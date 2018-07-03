/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class StoryTaskConfigStruct extends BaseConfig
	{
	

		id : number;
		task : number;
		value : number;
		zh_cn_description : string;
		pre_id : number;
		reward : DTItemNum[];





		
		get description()
		{
			return this.zh_cn_description
		}
	}


}