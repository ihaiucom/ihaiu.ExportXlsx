/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import CompoundConfig from "../ConfigExtends/CompoundConfig";


export default class CompoundConfigReader extends JsonConfigRender<    CompoundConfig      >
{
	tableName = "Compound";
	configCls = CompoundConfig;

}