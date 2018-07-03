/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class ActorTrainConfigStruct extends BaseConfig
	{
	

		id : number;
		train_num : number;
		train_type : number;
		en_name : string;
		cost : DTItemNum[];
		property : number[];
		property_interval : DTRandomInterval[];
		scene_name : string;
		action : number;
		cn_tips : string;





		
		get tips()
		{
			return this.cn_tips
		}
	}


}