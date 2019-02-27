/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class OperationTasksConfigStruct extends BaseConfig
{


	id : number;
	type : number;
	starttime : number;
	endtime : number;
	country : number;
	plate : number;
	functionid : number;
	parameter : number;
	typename : number;
	counts : number;
	actors : number;
	actor_nation : number;
	actor_sex : number;
	actor_type : number;
	box_level : number;
	movie_type : number;
	reward : DTItemNum[];
	zh_cn_classname : string;
	zh_cn_description : string;





	
	get classname():string
	{
		let value = <string> LangManager.Instance.getValue("operationTasks", this.id, "classname");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_classname
	}
	get description():string
	{
		let value = <string> LangManager.Instance.getValue("operationTasks", this.id, "description");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_description
	}

}