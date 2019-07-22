/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import LoaderConfig from "../ConfigExtends/LoaderConfig";


export default class LoaderConfigReader extends JsonConfigRender<    LoaderConfig      >
{
	tableName = "Loader";
	configCls = LoaderConfig;

}