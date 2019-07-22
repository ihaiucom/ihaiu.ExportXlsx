/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import RewardConfig from "../ConfigExtends/RewardConfig";


export default class RewardConfigReader extends JsonConfigRender<    RewardConfig      >
{
	tableName = "Reward";
	configCls = RewardConfig;

}