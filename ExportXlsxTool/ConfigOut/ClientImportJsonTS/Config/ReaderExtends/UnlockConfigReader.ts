/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import UnlockConfig from "../ConfigExtends/UnlockConfig";


export default class UnlockConfigReader extends JsonConfigRender<    UnlockConfig      >
{
	tableName = "Unlock";
	configCls = UnlockConfig;

}