/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import ItemTypeConfig from "../ConfigExtends/ItemTypeConfig";


export default class ItemTypeConfigReader extends JsonConfigRender<    ItemTypeConfig      >
{
	tableName = "ItemType";
	configCls = ItemTypeConfig;

}