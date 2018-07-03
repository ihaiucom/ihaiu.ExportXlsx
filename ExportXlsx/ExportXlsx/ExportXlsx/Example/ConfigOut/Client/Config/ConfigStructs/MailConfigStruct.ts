/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class MailConfigStruct extends BaseConfig
	{
	

		id : number;
		tip : string;
		life_time : number;
		zh_cn_title : string;
		item : DTItemNum[];
		zh_cn_content : string;





		
		get title()
		{
			return this.zh_cn_title
		}
		get content()
		{
			return this.zh_cn_content
		}
	}


}