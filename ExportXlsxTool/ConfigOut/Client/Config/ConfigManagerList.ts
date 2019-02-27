/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import ConfigRenderInterface from "./Interfaces/ConfigRenderInterface";
import ActionConfigReader from "./ReaderExtends/ActionConfigReader";
import ActorConfigReader from "./ReaderExtends/ActorConfigReader";
import AvatarConfigReader from "./ReaderExtends/AvatarConfigReader";
import GlobalConfigReader from "./ReaderExtends/GlobalConfigReader";
import ItemConfigReader from "./ReaderExtends/ItemConfigReader";
import MailConfigReader from "./ReaderExtends/MailConfigReader";
import MenuConfigReader from "./ReaderExtends/MenuConfigReader";
import MsgConfigReader from "./ReaderExtends/MsgConfigReader";
import ShopConfigReader from "./ReaderExtends/ShopConfigReader";

/// 配置读取器列表
export class ConfigManagerList
{
    // 读取器列表
    renders: ConfigRenderInterface[] = [];


    action  : ActionConfigReader = new ActionConfigReader();
    actor  : ActorConfigReader = new ActorConfigReader();
    avatar  : AvatarConfigReader = new AvatarConfigReader();
    global  : GlobalConfigReader = new GlobalConfigReader();
    item  : ItemConfigReader = new ItemConfigReader();
    mail  : MailConfigReader = new MailConfigReader();
    menu  : MenuConfigReader = new MenuConfigReader();
    msg  : MsgConfigReader = new MsgConfigReader();
    shop  : ShopConfigReader = new ShopConfigReader();


    // 初始化读取器列表
    initList()
    {

        this.renders.push(this.action);
        this.renders.push(this.actor);
        this.renders.push(this.avatar);
        this.renders.push(this.global);
        this.renders.push(this.item);
        this.renders.push(this.mail);
        this.renders.push(this.menu);
        this.renders.push(this.msg);
        this.renders.push(this.shop);
    }
    
}