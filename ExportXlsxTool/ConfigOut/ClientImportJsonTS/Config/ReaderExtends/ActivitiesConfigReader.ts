/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import ActivitiesConfig from "../ConfigExtends/ActivitiesConfig";


export default class ActivitiesConfigReader extends JsonConfigRender<    ActivitiesConfig      >
{
	tableName = "Activities";
	configCls = ActivitiesConfig;

}