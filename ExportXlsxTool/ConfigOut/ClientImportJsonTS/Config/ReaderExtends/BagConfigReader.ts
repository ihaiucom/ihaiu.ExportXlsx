/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import BagConfig from "../ConfigExtends/BagConfig";


export default class BagConfigReader extends JsonConfigRender<    BagConfig      >
{
	tableName = "Bag";
	configCls = BagConfig;

}