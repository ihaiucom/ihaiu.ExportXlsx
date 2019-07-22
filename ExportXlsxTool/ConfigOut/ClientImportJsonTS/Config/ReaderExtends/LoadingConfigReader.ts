/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import LoadingConfig from "../ConfigExtends/LoadingConfig";


export default class LoadingConfigReader extends JsonConfigRender<    LoadingConfig      >
{
	tableName = "Loading";
	configCls = LoadingConfig;

}