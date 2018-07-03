/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class MaintaskConfigStruct extends BaseConfig
	{
	

		id : number;
		cn_name : string;
		en_name : string;
		trigger : number;
		t_value : number;
		require : number;
		r_value : number;
		cn_info : string;
		en_info : string;
		cn_rinfo : string;
		en_rinfo : string;
		cn_content : string;
		en_content : string;
		reward : DTItemNum[];
		pre_quest : number;
		guide : boolean;
		guide_id : number;





		
		get name()
		{
			return this.cn_name
		}
		get info()
		{
			return this.cn_info
		}
		get rinfo()
		{
			return this.cn_rinfo
		}
		get content()
		{
			return this.cn_content
		}
	}


}