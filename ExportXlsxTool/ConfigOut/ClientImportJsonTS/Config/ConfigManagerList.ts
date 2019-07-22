/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "./BaseConfig";
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


export class ActivitiesConfigStruct extends BaseConfig
{

	id : number;
	type : number;
	name : string;
	startType : number;
	levelReq : number;
	blockReq : number;
	start : number;
	duration : number;
	icon : number;
	iconChosen : number;
	info : string;

	

}

export class AvatarConfigStruct extends BaseConfig
{

	id : number;
	en_name : string;
	zh_cn_name : string;
	bodyIcon : string;
	halfIcon : string;
	diamondHeadIcon : string;
	zh_cn_icon : string;
	en_icon : string;
	pieceIcon : string;
	modelSkin : string;
	modelBones : string;
	bgPic : string;
	coVector : DTVector2;

	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("avatar", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get icon():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_icon

		let value = <string> Game.lang.getValue("avatar", this.id, "icon");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_icon
	}

}

export class BagConfigStruct extends BaseConfig
{

	id : number;
	itemId : number;
	level : number;
	sellPrice : number;
	stackNumber : number;

	

}

export class CompoundConfigStruct extends BaseConfig
{

	id : number;
	syn_item : number;
	num_req : number;
	split_list : DTItemNum[];

	

}

export class CountActivitiesConfigStruct extends BaseConfig
{

	id : number;
	rewardId : number;
	avatar : number;

	

}

export class GashaponConfigStruct extends BaseConfig
{

	id : number;
	type : number;
	menu : number;
	num : number;
	cost : DTFixItemNum[];
	freeNum : number;
	freeTime : number;
	startTime : DTDateTime;
	endTime : DTDateTime;
	pic : number;
	rewardId : number;
	allowance : DTFixItemNum[];
	allowanceNum : number;
	desc : string;

	

}

export class HeadPortraitConfigStruct extends BaseConfig
{

	id : number;
	zh_cn_name : string;
	sex : number;
	unlock : DTItemNum;
	icon : number;

	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("headPortrait", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}

export class HeroConfigStruct extends BaseConfig
{

	id : number;
	heroId : number;
	level : number;
	blood : number;
	reloadTime : number;
	critPower : number;
	critRate : number;
	hurt : number;
	weaponCap : number;
	reductionRate : number;
	upgradeCost : number;
	res : string;
	hw : number;
	hh : number;

	

}

export class ItemConfigStruct extends BaseConfig
{

	id : number;
	zh_cn_name : string;
	zh_cn_item_des : string;
	icon : number;
	star : number;
	type : number;
	max_num : number;
	get_way : number[];
	rewardid : number;
	can_sell : boolean;
	price : number;
	syn_id : number;
	actor_id : number;
	actor_num : number;
	zh_cn_get_way_explain : string;
	User_item_info : number;

	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("item", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get item_des():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_item_des

		let value = <string> Game.lang.getValue("item", this.id, "item_des");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_item_des
	}
	get get_way_explain():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_get_way_explain

		let value = <string> Game.lang.getValue("item", this.id, "get_way_explain");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_get_way_explain
	}

}

export class ItemTypeConfigStruct extends BaseConfig
{

	id : number;
	zh_cn_name : string;
	field : string;

	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("itemType", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}

export class LoaderConfigStruct extends BaseConfig
{

	id : number;
	name : string;
	isShowCircle : boolean;

	

}

export class LoadingConfigStruct extends BaseConfig
{

	id : number;
	text : string;

	

}

export class MailConfigStruct extends BaseConfig
{

	id : number;
	life_time : number;
	zh_cn_title : string;
	en_title : string;
	item : DTItemNum[];
	zh_cn_content : string;
	en_content : string;

	
	get title():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_title

		let value = <string> Game.lang.getValue("mail", this.id, "title");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_title
	}
	get content():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_content

		let value = <string> Game.lang.getValue("mail", this.id, "content");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_content
	}

}

export class MapConfigStruct extends BaseConfig
{

	id : number;
	g : number;
	vx : number;
	vy : number;
	maxt : number;
	mint : number;
	maxPillar : number;

	

}

export class MenuConfigStruct extends BaseConfig
{

	id : number;
	zh_cn_name : string;
	icon : string;
	moduleName : string;
	layer : number;
	closeOtherType : number;
	closeHomeWindow : boolean;
	isAutoOpenHomeWindow : boolean;
	cacheTime : number;
	loaderId : number;
	barType : number;
	barIndex : number;
	openAnimation : number;
	closeAnimation : number;

	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("menu", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}

export class MenuIndexConfigStruct extends BaseConfig
{

	id : number;
	name : string;
	menuId : number;
	openType : number;
	menuIndex : number;

	

}

export class MsgConfigStruct extends BaseConfig
{

	id : number;
	key : string;
	module : string;
	name : string;
	zh_cn_notice : string;
	en_notice : string;

	
	get notice():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_notice

		let value = <string> Game.lang.getValue("msg", this.id, "notice");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_notice
	}

}

export class PlayerLevelConfigStruct extends BaseConfig
{

	id : number;
	exp : number;
	reward : DTFixItemNum[];
	story : DTItemNum;
	order_qua : number[];
	order_num : number;
	train_max : number;
	train_count : number;
	actor_max : number;
	actor_count : number;
	hide_max : number;
	hide_count : number;
	day_max : number;
	day : number;
	meeting_cd : number;
	cost : DTItemNum;
	mc_special_package1 : DTItemNum;
	mc_special_package2 : DTItemNum;
	shop_1003 : number;
	shop_1004 : number;
	Turntable_min : number;
	Turntable_max : number;

	

}

export class PropertyConfigStruct extends BaseConfig
{

	id : number;
	field : string;
	zh_cn_name : string;
	zh_cn_addname : string;
	addnamenum : number;
	details : boolean;
	icon : number;
	groupType : number;
	visible : boolean;

	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("property", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get addname():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_addname

		let value = <string> Game.lang.getValue("property", this.id, "addname");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_addname
	}

}

export class PvpConfigStruct extends BaseConfig
{

	id : number;
	pos : number;
	length : number;
	r : number;
	g : number;
	b : number;
	x : number;
	y : number;
	delta : number;
	bodyScale : number;

	

}

export class RewardConfigStruct extends BaseConfig
{

	id : number;
	fixedItems : DTFixItemNum[];
	multipleReward : number;
	randomItems : DTRewardRandom[];
	randomCount : number;

	

}

export class ShopConfigStruct extends BaseConfig
{

	id : number;
	space : number;
	count : number;
	oldPrice : number;
	nowPrice : number;
	currency : number;

	

}

export class UnlockConfigStruct extends BaseConfig
{

	id : number;
	zh_cn_name : string;
	icon_type : number;
	menu_id : number;
	item_id : number;
	show_type : number;
	group : number;
	group_id : number;
	position : number;
	open_type : number;
	open_data : number;
	open_show : number[];
	plot : number;
	time : number;
	close_type : number;
	close_data : number;
	continue : number;
	is_new : boolean;
	zh_cn_touch_txt : string;

	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("unlock", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get touch_txt():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_touch_txt

		let value = <string> Game.lang.getValue("unlock", this.id, "touch_txt");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_touch_txt
	}

}

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