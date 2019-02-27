/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";



export default class WriterAdaptEffectConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_adapt : string;
	zh_cn_adapt_des : string;
	effect1 : number;
	effect1_weight : number;
	effect2 : number;
	effect2_weight : number;
	effect3 : number;
	effect3_weight : number;
	effect4 : number;
	effect4_weight : number;





	
	get adapt():string
	{
		let value = <string> LangManager.Instance.getValue("writerAdaptEffect", this.id, "adapt");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_adapt
	}
	get adapt_des():string
	{
		let value = <string> LangManager.Instance.getValue("writerAdaptEffect", this.id, "adapt_des");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_adapt_des
	}

}