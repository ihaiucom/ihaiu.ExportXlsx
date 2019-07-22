/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import MailConfig from "../ConfigExtends/MailConfig";


export default class MailConfigReader extends JsonConfigRender<    MailConfig      >
{
	tableName = "Mail";
	configCls = MailConfig;

}