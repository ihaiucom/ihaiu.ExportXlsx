/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import PropertyConfig from "../ConfigExtends/PropertyConfig";


export default class PropertyConfigReader extends JsonConfigRender<    PropertyConfig      >
{
	tableName = "Property";
	configCls = PropertyConfig;

}