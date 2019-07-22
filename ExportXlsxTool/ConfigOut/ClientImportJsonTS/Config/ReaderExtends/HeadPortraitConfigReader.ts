/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import HeadPortraitConfig from "../ConfigExtends/HeadPortraitConfig";


export default class HeadPortraitConfigReader extends JsonConfigRender<    HeadPortraitConfig      >
{
	tableName = "HeadPortrait";
	configCls = HeadPortraitConfig;

}