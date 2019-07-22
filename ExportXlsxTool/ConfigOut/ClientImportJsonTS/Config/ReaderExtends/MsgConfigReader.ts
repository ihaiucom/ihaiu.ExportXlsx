/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import MsgConfig from "../ConfigExtends/MsgConfig";


export default class MsgConfigReader extends JsonConfigRender<    MsgConfig      >
{
	tableName = "Msg";
	configCls = MsgConfig;

}