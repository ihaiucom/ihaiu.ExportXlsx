/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class VisitConfigStruct extends BaseConfig
	{
	

		id : number;
		actor : number;
		fans : number;
		flower : number;
		zh_cn_fans_speak0 : string;
		zh_cn_actor_speak0 : string;
		zh_cn_fans_speak1 : string;
		zh_cn_actor_speak1 : string;
		zh_cn_fans_speak2 : string;
		zh_cn_actor_speak2 : string;
		reward : DTItemNum[];
		expect : number;





		
		get fans_speak0()
		{
			return this.zh_cn_fans_speak0
		}
		get actor_speak0()
		{
			return this.zh_cn_actor_speak0
		}
		get fans_speak1()
		{
			return this.zh_cn_fans_speak1
		}
		get actor_speak1()
		{
			return this.zh_cn_actor_speak1
		}
		get fans_speak2()
		{
			return this.zh_cn_fans_speak2
		}
		get actor_speak2()
		{
			return this.zh_cn_actor_speak2
		}
	}


}