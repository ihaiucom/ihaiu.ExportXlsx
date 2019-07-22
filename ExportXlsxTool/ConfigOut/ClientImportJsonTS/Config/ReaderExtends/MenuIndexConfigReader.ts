/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import MenuIndexConfig from "../ConfigExtends/MenuIndexConfig";


export default class MenuIndexConfigReader extends JsonConfigRender<    MenuIndexConfig      >
{
	tableName = "MenuIndex";
	configCls = MenuIndexConfig;

}