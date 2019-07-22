/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import MapConfig from "../ConfigExtends/MapConfig";


export default class MapConfigReader extends JsonConfigRender<    MapConfig      >
{
	tableName = "Map";
	configCls = MapConfig;

}