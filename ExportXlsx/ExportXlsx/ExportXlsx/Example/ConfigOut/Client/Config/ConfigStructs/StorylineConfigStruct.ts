/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class StorylineConfigStruct extends BaseConfig
	{
	

		id : number;
		trigger : number;
		value : number;
		guide : boolean;
		guide_id : number;
		group : number;
		order : number;
		type_id : number;
		cn_content : string;
		en_content : string;
		anchor : number;
		reward : DTItemNum;





		
		get content()
		{
			return this.cn_content
		}
	}


}