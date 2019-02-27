/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class ActorTrainConfigStruct extends BaseConfig
{


	id : number;
	train_type : number;
	en_name : string;
	cn_name : string;
	property : number[];
	en_scene_name : string;
	cn_scene_name : string;
	action : number;
	tips : string;





	
	get name():string
	{
		let value = <string> LangManager.Instance.getValue("actorTrain", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_name
	}
	get scene_name():string
	{
		let value = <string> LangManager.Instance.getValue("actorTrain", this.id, "scene_name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_scene_name
	}

}