/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class GuidesystemConfigStruct extends BaseConfig
	{
	

		id : number;
		group : number;
		order : number;
		path : string;
		assistant : boolean;
		position : DTVector2;
		cn_content : string;
		en_content : string;
		finger : boolean;
		f_direction : number;
		halo : boolean;
		storyline : boolean;
		storyline_id : number;





		
		get content()
		{
			return this.cn_content
		}
	}


}