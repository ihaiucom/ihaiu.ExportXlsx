/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class StoryCharactersConfigStruct extends BaseConfig
	{
	

		id : number;
		story_id : number;
		character_num : number;
		zh_cn_name : string;
		type : number;
		type_pic : number;
		sex : number;
		country : number;
		show_type : number;
		age_type : number;
		tags : number[];
		effect : number[];
		zh_cn_introduction : string;





		
		get name()
		{
			return this.zh_cn_name
		}
		get introduction()
		{
			return this.zh_cn_introduction
		}
	}


}