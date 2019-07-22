/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import GashaponConfig from "../ConfigExtends/GashaponConfig";


export default class GashaponConfigReader extends JsonConfigRender<    GashaponConfig      >
{
	tableName = "Gashapon";
	configCls = GashaponConfig;

}