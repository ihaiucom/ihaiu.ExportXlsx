/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import ConfigRenderInterface from "./Interfaces/ConfigRenderInterface";
import ActivitiesConfigReader from "./ReaderExtends/ActivitiesConfigReader";
import AvatarConfigReader from "./ReaderExtends/AvatarConfigReader";
import BagConfigReader from "./ReaderExtends/BagConfigReader";
import CompoundConfigReader from "./ReaderExtends/CompoundConfigReader";
import CountActivitiesConfigReader from "./ReaderExtends/CountActivitiesConfigReader";
import GashaponConfigReader from "./ReaderExtends/GashaponConfigReader";
import HeadPortraitConfigReader from "./ReaderExtends/HeadPortraitConfigReader";
import HeroConfigReader from "./ReaderExtends/HeroConfigReader";
import ItemConfigReader from "./ReaderExtends/ItemConfigReader";
import ItemTypeConfigReader from "./ReaderExtends/ItemTypeConfigReader";
import LoaderConfigReader from "./ReaderExtends/LoaderConfigReader";
import LoadingConfigReader from "./ReaderExtends/LoadingConfigReader";
import MailConfigReader from "./ReaderExtends/MailConfigReader";
import MapConfigReader from "./ReaderExtends/MapConfigReader";
import MenuConfigReader from "./ReaderExtends/MenuConfigReader";
import MenuIndexConfigReader from "./ReaderExtends/MenuIndexConfigReader";
import MsgConfigReader from "./ReaderExtends/MsgConfigReader";
import PlayerLevelConfigReader from "./ReaderExtends/PlayerLevelConfigReader";
import PropertyConfigReader from "./ReaderExtends/PropertyConfigReader";
import PvpConfigReader from "./ReaderExtends/PvpConfigReader";
import RewardConfigReader from "./ReaderExtends/RewardConfigReader";
import ShopConfigReader from "./ReaderExtends/ShopConfigReader";
import UnlockConfigReader from "./ReaderExtends/UnlockConfigReader";

/// 配置读取器列表
export default class ConfigManagerList
{
    // 读取器列表
    renders: ConfigRenderInterface[] = [];


    activities  : ActivitiesConfigReader = new ActivitiesConfigReader();
    avatar  : AvatarConfigReader = new AvatarConfigReader();
    bag  : BagConfigReader = new BagConfigReader();
    compound  : CompoundConfigReader = new CompoundConfigReader();
    countActivities  : CountActivitiesConfigReader = new CountActivitiesConfigReader();
    gashapon  : GashaponConfigReader = new GashaponConfigReader();
    headPortrait  : HeadPortraitConfigReader = new HeadPortraitConfigReader();
    hero  : HeroConfigReader = new HeroConfigReader();
    item  : ItemConfigReader = new ItemConfigReader();
    itemType  : ItemTypeConfigReader = new ItemTypeConfigReader();
    loader  : LoaderConfigReader = new LoaderConfigReader();
    loading  : LoadingConfigReader = new LoadingConfigReader();
    mail  : MailConfigReader = new MailConfigReader();
    map  : MapConfigReader = new MapConfigReader();
    menu  : MenuConfigReader = new MenuConfigReader();
    menuIndex  : MenuIndexConfigReader = new MenuIndexConfigReader();
    msg  : MsgConfigReader = new MsgConfigReader();
    playerLevel  : PlayerLevelConfigReader = new PlayerLevelConfigReader();
    property  : PropertyConfigReader = new PropertyConfigReader();
    pvp  : PvpConfigReader = new PvpConfigReader();
    reward  : RewardConfigReader = new RewardConfigReader();
    shop  : ShopConfigReader = new ShopConfigReader();
    unlock  : UnlockConfigReader = new UnlockConfigReader();


    // 初始化读取器列表
    initList()
    {

        this.renders.push(this.activities);
        this.renders.push(this.avatar);
        this.renders.push(this.bag);
        this.renders.push(this.compound);
        this.renders.push(this.countActivities);
        this.renders.push(this.gashapon);
        this.renders.push(this.headPortrait);
        this.renders.push(this.hero);
        this.renders.push(this.item);
        this.renders.push(this.itemType);
        this.renders.push(this.loader);
        this.renders.push(this.loading);
        this.renders.push(this.mail);
        this.renders.push(this.map);
        this.renders.push(this.menu);
        this.renders.push(this.menuIndex);
        this.renders.push(this.msg);
        this.renders.push(this.playerLevel);
        this.renders.push(this.property);
        this.renders.push(this.pvp);
        this.renders.push(this.reward);
        this.renders.push(this.shop);
        this.renders.push(this.unlock);
    }
    
}