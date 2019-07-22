/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import MenuConfig from "../ConfigExtends/MenuConfig";


export default class MenuConfigReader extends JsonConfigRender<    MenuConfig      >
{
	tableName = "Menu";
	configCls = MenuConfig;

}