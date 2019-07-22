/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import HeroConfig from "../ConfigExtends/HeroConfig";


export default class HeroConfigReader extends JsonConfigRender<    HeroConfig      >
{
	tableName = "Hero";
	configCls = HeroConfig;

}