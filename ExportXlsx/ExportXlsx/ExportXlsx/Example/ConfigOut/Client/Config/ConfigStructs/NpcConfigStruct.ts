/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class NpcConfigStruct extends BaseConfig
	{
	

		id : number;
		en_name : string;
		cn_name : string;
		sex : number;
		avatar : number;





		
		get name()
		{
			return this.cn_name
		}
	}


}