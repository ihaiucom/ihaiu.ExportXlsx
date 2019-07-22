/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////



import JsonConfigRender from "../JsonConfigRender";
import PlayerLevelConfig from "../ConfigExtends/PlayerLevelConfig";


export default class PlayerLevelConfigReader extends JsonConfigRender<    PlayerLevelConfig      >
{
	tableName = "PlayerLevel";
	configCls = PlayerLevelConfig;

}