/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import AvatarConfig from "../ConfigExtends/AvatarConfig";


export default class AvatarConfigReader extends JsonConfigRender<    AvatarConfig      >
{
	tableName = "Avatar";
	configCls = AvatarConfig;

}