/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class SpeakConfigStruct extends BaseConfig
	{
	

		id : number;
		en_speak : string;
		cn_speak : string;





		
		get speak()
		{
			return this.cn_speak
		}
	}


}