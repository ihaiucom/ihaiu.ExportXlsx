/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import ItemConfig from "../ConfigExtends/ItemConfig";


export default class ItemConfigReader extends JsonConfigRender<    ItemConfig      >
{
	tableName = "Item";
	configCls = ItemConfig;

}