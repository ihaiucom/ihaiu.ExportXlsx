/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import ShopConfig from "../ConfigExtends/ShopConfig";


export default class ShopConfigReader extends JsonConfigRender<    ShopConfig      >
{
	tableName = "Shop";
	configCls = ShopConfig;

}