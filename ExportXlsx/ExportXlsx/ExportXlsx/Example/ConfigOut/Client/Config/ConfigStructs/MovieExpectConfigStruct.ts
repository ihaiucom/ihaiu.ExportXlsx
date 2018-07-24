/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class MovieExpectConfigStruct extends BaseConfig
	{
	

		id : number;
		zh_cn_name : string;
		tips : string;
		expect_req_min : number;
		expect_req_max : number;
		pic : number;
		gain_up : number;
		zh_cn_pic_word : string;





		
		get name()
		{
			return this.zh_cn_name
		}
		get pic_word()
		{
			return this.zh_cn_pic_word
		}
	}


}