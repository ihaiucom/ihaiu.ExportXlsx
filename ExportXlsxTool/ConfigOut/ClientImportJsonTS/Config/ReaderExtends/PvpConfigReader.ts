/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import PvpConfig from "../ConfigExtends/PvpConfig";


export default class PvpConfigReader extends JsonConfigRender<    PvpConfig      >
{
	tableName = "Pvp";
	configCls = PvpConfig;

}