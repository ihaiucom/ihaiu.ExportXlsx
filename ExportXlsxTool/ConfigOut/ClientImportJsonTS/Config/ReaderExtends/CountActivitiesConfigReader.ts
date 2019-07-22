/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import CountActivitiesConfig from "../ConfigExtends/CountActivitiesConfig";


export default class CountActivitiesConfigReader extends JsonConfigRender<    CountActivitiesConfig      >
{
	tableName = "CountActivities";
	configCls = CountActivitiesConfig;

}