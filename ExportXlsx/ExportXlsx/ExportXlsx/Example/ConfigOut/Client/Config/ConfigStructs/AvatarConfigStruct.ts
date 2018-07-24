/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class AvatarConfigStruct extends BaseConfig
	{
	

		id : number;
		en_name : string;
		zh_cn_name : string;
		body_icon : string;
		icon : string;
		piece_icon : string;
		model_skin : string;
		model_bones : string;
		bg_pic : string;





		
		get name()
		{
			return this.zh_cn_name
		}
	}


}