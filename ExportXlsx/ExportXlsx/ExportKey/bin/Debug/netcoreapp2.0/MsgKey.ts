/////////////////////////////////////
// ExportKey生成
// http://blog.ihaiu.com
/////////////////////////////////////

class MsgKey
{
	// 0 KeyField
	// 1 KeyValue
	// 2 ID
	// 3 ModuleName
	// 4 Name

	/** 1000  测试 --- 测试 */
	static Msg_test = "Msg_test";

	/** 1001  账号信息 --- 名称长度不对 */
	static account_name_long = "account_name_long";

	/** 1002  账号信息 --- 名称为纯数字 */
	static account_name_num = "account_name_num";

	/** 1003  账号信息 --- 名称开头和结尾有空格 */
	static account_name_space = "account_name_space";

	/** 1004  账号信息 --- 名称与原名相同 */
	static account_name_repeat = "account_name_repeat";

	/** 1005  账号信息 --- 名称中有屏蔽词 */
	static account_name_blockword = "account_name_blockword";

	/** 1006  账号信息 --- 名称与其他玩家重名 */
	static account_name_repeatothers = "account_name_repeatothers";

	/** 1007  账号信息 --- 公司重命名成功 */
	static account_name_ok = "account_name_ok";

	/** 1008  账号信息 --- 频繁修改个性签名提示 */
	static account_name_often = "account_name_often";

	/** 1009  生产 --- 一键生产 */
	static produce_one-click = "produce_one-click";

	/** 1010  生产 --- 一键领取达仓库上限 */
	static produce_warehouse_max = "produce_warehouse_max";

	/** 1011  生产 --- VIP等级不够 */
	static produce_recvip_less = "produce_recvip_less";

	/** 1012  生产 --- 没有足够的道具 */
	static produce_item_less = "produce_item_less";

	/** 1013  生产 --- 没有足够的图纸 */
	static produce_paper_less = "produce_paper_less";

	/** 1014  生产 --- 生产线累计奖励到达上限 */
	static produce_item_max = "produce_item_max";

	/** 1015  生产 --- 生产线队列到达上限 */
	static produce_line_max = "produce_line_max";

	/** 1016  生产 --- 前置生产线未解锁 */
	static produce_pre_unlock = "produce_pre_unlock";

	/** 1017  生产 --- 钻石不足 */
	static produce_diamond_less = "produce_diamond_less";

	/** 1018  生产 --- 金币不足 */
	static produce_gold_less = "produce_gold_less";

	/** 1019  生产 --- VIP等级不够 */
	static produce_provip_less = "produce_provip_less";

	/** 1020  生产 --- 所有生产线队列到达上限 */
	static produce_lines_max = "produce_lines_max";

	/** 1021  拍摄 --- 未开启媒体访问提示 */
	static non_midia_visit = "non_midia_visit";

	/** 1022  拍摄 --- 没有符合条件的艺人 */
	static non_suitable_actor = "non_suitable_actor";

	/** 1023  拍摄 --- 没有足够数量的艺人 */
	static non_enough_actor = "non_enough_actor";

	/** 1024  拍摄 --- 艺人招募提示 */
	static actor_recruit = "actor_recruit";

	/** 1025  拍摄 --- 比赛排行重置提示 */
	static ranking_list_reset = "ranking_list_reset";

	/** 1026  拍摄 --- 提前下映提示 */
	static movie_stop_tips = "movie_stop_tips";

	/** 1027  排行 --- 排行榜滚动文字1 */
	static ranking_list_tips1 = "ranking_list_tips1";

	/** 1028  排行 --- 排行榜滚动文字2 */
	static ranking_list_tips2 = "ranking_list_tips2";

	/** 1029  排行 --- 票房排行隐藏显示提示 */
	static movie_ranking_list_hidden = "movie_ranking_list_hidden";

	/** 1030  街区 --- 街区升档需求提示 */
	static block_upgrade_requirement = "block_upgrade_requirement";

	/** 1031  街区 --- 奖杯获取提示 */
	static trophy_tips = "trophy_tips";

	/** 1032  街区 --- 奖杯获取补充提示 */
	static trophy_tips2 = "trophy_tips2";

	/** 1033  街区 --- 完成街区提示 */
	static finished_block = "finished_block";

	/** 1034  院线 --- 院线签约 */
	static cinema_sign = "cinema_sign";

	/** 1035  排行榜 --- 奖励说明1 */
	static ranking_list_instruction1 = "ranking_list_instruction1";

	/** 1036  排行榜 --- 奖励说明2 */
	static ranking_list_instruction2 = "ranking_list_instruction2";

	/** 1037  排行榜 --- 奖励说明3 */
	static ranking_list_instruction3 = "ranking_list_instruction3";

	/** 1038  排行榜 --- 修改服务器名称 */
	static change_server_name = "change_server_name";

	/** 1039  影城签约 --- 未选择签约影城 */
	static choose_cinema = "choose_cinema";

	/** 1040  拍摄 --- 领取收益提示 */
	static movie_get_tips = "movie_get_tips";

	/** 1041  拍摄 --- 剧本契合提示 */
	static movie_story_coordination = "movie_story_coordination";

	/** 1042  拍摄 --- 角色契合提示 */
	static movie_character_coordination = "movie_character_coordination";

	/** 1043  拍摄 --- 剧本角色契合提示 */
	static movie_story_character_coordination = "movie_story_character_coordination";

	/** 1044  拍摄 --- 剧本角色无契合 */
	static movie_none_coordination = "movie_none_coordination";

	/** 1049  拍摄 --- 电影掉落提示 */
	static movie_drop_tips = "movie_drop_tips";

	/** 1050  拍摄 --- 玩家拍摄次数过多 */
	static movie_too_much = "movie_too_much";

	/** 1051  拍摄 --- 市场风向暴击1 */
	static movie_critical1 = "movie_critical1";

	/** 1052  拍摄 --- 市场风向暴击2 */
	static movie_critical2 = "movie_critical2";

	/** 1053  拍摄 --- 市场风向暴击3 */
	static movie_critical3 = "movie_critical3";

	/** 1054  拍摄 --- 市场风向暴击4 */
	static movie_critical4 = "movie_critical4";

	/** 1060  拍摄 --- 剧本目标未达成 */
	static movie_target_fail = "movie_target_fail";

	/** 1061  拍摄 --- 电影未大卖提示 */
	static movie_big_sell_tips = "movie_big_sell_tips";

	/** 1062  拍摄 --- 持续收益结束提示 */
	static earnings_over = "earnings_over";

	/** 1063  奥斯卡 --- 票房未入榜提示 */
	static oscar_non_rank_tips = "oscar_non_rank_tips";

	/** 1064  奥斯卡 --- 总票房未入榜提示 */
	static oscar_non_rank_tips2 = "oscar_non_rank_tips2";

	/** 1065  奥斯卡 --- 未拍摄电影提示 */
	static oscar_non_movie_tips = "oscar_non_movie_tips";

	/** 1066  奥斯卡 --- 未大卖提示 */
	static oscar_non_bigsell_tips = "oscar_non_bigsell_tips";

	/** 1067  奥斯卡 --- 未完成目标提示 */
	static oscar_non_target_tips = "oscar_non_target_tips";

	/** 1068  街区 --- 街区升档提示 */
	static block_upgrade_msg = "block_upgrade_msg";

	/** 1070  拍摄 --- 电影大卖报纸1 */
	static movie_big_sell1 = "movie_big_sell1";

	/** 1071  拍摄 --- 电影大卖报纸2 */
	static movie_big_sell2 = "movie_big_sell2";

	/** 1072  拍摄 --- 电影大卖报纸3 */
	static movie_big_sell3 = "movie_big_sell3";

	/** 1080  奥斯卡 --- 奥斯卡男演员无提名 */
	static oscar_non_actor = "oscar_non_actor";

	/** 1081  奥斯卡 --- 奥斯卡女演员无提名 */
	static oscar_non_actress = "oscar_non_actress";

	/** 1082  奥斯卡 --- 奥斯卡最佳表演无提名 */
	static oscar_non_performance = "oscar_non_performance";

	/** 1083  奥斯卡 --- 奥斯卡最佳艺术无提名 */
	static oscar_non_art = "oscar_non_art";

	/** 1084  奥斯卡 --- 奥斯卡最受欢迎无提名 */
	static oscar_non_popular = "oscar_non_popular";

	/** 1085  奥斯卡 --- 奥斯卡最佳男演员 */
	static oscar_actor = "oscar_actor";

	/** 1086  奥斯卡 --- 奥斯卡最佳女演员 */
	static oscar_actress = "oscar_actress";

	/** 1087  奥斯卡 --- 奥斯卡最佳表演电影 */
	static oscar_performance = "oscar_performance";

	/** 1088  奥斯卡 --- 奥斯卡最佳艺术电影 */
	static oscar_art = "oscar_art";

	/** 1089  奥斯卡 --- 奥斯卡最受欢迎电影 */
	static oscar_popular = "oscar_popular";

	/** 1090  拍摄 --- 奥斯卡前禁止拍摄电影 */
	static oscar_forbid_movie = "oscar_forbid_movie";

	/** 1091  邮件 --- 没有可删除的邮件 */
	static non_deletable_mail = "non_deletable_mail";

	/** 1092  邮件 --- 没有可领取的邮件 */
	static non_can_receive_mail = "non_can_receive_mail";

	/** 1093  邮件 --- 空邮箱 */
	static non_mail = "non_mail";

	/** 1094  拍摄 --- 剧本有目标 */
	static story_target_tips = "story_target_tips";

	/** 1095  拍摄 --- 剧本没有目标 */
	static story_non_target_tips = "story_non_target_tips";

	/** 1096  拍摄 --- 媒体评价提示 */
	static story_midia_tips = "story_midia_tips";

	/** 1097  合作 --- id无效 */
	static null_id = "null_id";

	/** 1098  合作 --- 目标玩家已合作 */
	static cooperated_player = "cooperated_player";

	/** 1099  合作 --- 本周合作次数不足 */
	static no_cooperation_num = "no_cooperation_num";

	/** 1100  合作 --- 没有未完成的订单 */
	static no_cooperation_orders = "no_cooperation_orders";

	/** 1101  合作 --- 解除合作 */
	static relieve_cooperation = "relieve_cooperation";

	/** 1102  合作 --- 重复邀请 */
	static repetition_cooperation = "repetition_cooperation";

	/** 1103  仓库 --- 赠送资产 */
	static null_actor_send = "null_actor_send";

	/** 1104  建筑 --- 建造确认 */
	static build_confirm = "build_confirm";

	/** 1105  建筑 --- 材料不足 */
	static build_non_material = "build_non_material";

	/** 1106  建筑 --- 等级不足 */
	static build_non_level = "build_non_level";

	/** 1107  建筑 --- 没有前置建筑 */
	static build_non_prebuilding = "build_non_prebuilding";

	/** 1108  建筑 --- 街区档次不足 */
	static build_non_block = "build_non_block";

	/** 1109  建筑 --- 房间已建造提示 */
	static build_be_builded = "build_be_builded";

	/** 1110  拍摄 --- 剧本与市场观众对比差1 */
	static movie_market_bad1 = "movie_market_bad1";

	/** 1111  拍摄 --- 剧本与市场观众对比差2 */
	static movie_market_bad2 = "movie_market_bad2";

	/** 1112  拍摄 --- 剧本和市场观众对比好1 */
	static movie_market_good1 = "movie_market_good1";

	/** 1113  拍摄 --- 剧本和市场观众对比好2 */
	static movie_market_good2 = "movie_market_good2";

	/** 1114  拍摄 --- 电影艺人报酬提示 */
	static movie_actor_pay = "movie_actor_pay";

	/** 1115  拍摄 --- 艺人参加媒体访问提示 */
	static movie_mediavisit_tips = "movie_mediavisit_tips";

	/** 1116  拍摄 --- 电影熟练度加成 */
	static movie_type_addition = "movie_type_addition";

	/** 1117  拍摄 --- 签约院线提示 */
	static movie_cinema_tips = "movie_cinema_tips";

	/** 1118  拍摄 --- 未签约院线提示 */
	static movie_unlock_cinema_tips = "movie_unlock_cinema_tips";

	/** 1119  拍摄 --- 下映后市场反馈 */
	static movie_market_feedback = "movie_market_feedback";

	/** 1120  拍摄 --- 下映后剧本反馈 */
	static movie_story_feedback = "movie_story_feedback";

	/** 1121  拍摄 --- 下映后拍摄类型反馈 */
	static movie_shoottype_feedback = "movie_shoottype_feedback";

	/** 1122  拍摄 --- 许可证回复提示 */
	static movie_licence_tips = "movie_licence_tips";

	/** 1123  拍摄 --- 拍摄类型提示 */
	static movie_type_tips = "movie_type_tips";

	/** 1124  拍摄 --- 拍摄1阶段提示 */
	static movie_state_tips1 = "movie_state_tips1";

	/** 1125  拍摄 --- 拍摄2阶段提示 */
	static movie_state_tips2 = "movie_state_tips2";

	/** 1126  拍摄 --- 拍摄3阶段提示 */
	static movie_state_tips3 = "movie_state_tips3";

	/** 1130  拍摄 --- 媒体评分0-1 */
	static movie_midia_score_msg0 = "movie_midia_score_msg0";

	/** 1131  拍摄 --- 媒体评分1-2 */
	static movie_midia_score_msg1 = "movie_midia_score_msg1";

	/** 1132  拍摄 --- 媒体评分2-3 */
	static movie_midia_score_msg2 = "movie_midia_score_msg2";

	/** 1133  拍摄 --- 媒体评分3-4 */
	static movie_midia_score_msg3 = "movie_midia_score_msg3";

	/** 1134  拍摄 --- 媒体评分4-5 */
	static movie_midia_score_msg4 = "movie_midia_score_msg4";

	/** 1135  拍摄 --- 媒体评分5-6 */
	static movie_midia_score_msg5 = "movie_midia_score_msg5";

	/** 1136  拍摄 --- 媒体评分6-7 */
	static movie_midia_score_msg6 = "movie_midia_score_msg6";

	/** 1137  拍摄 --- 媒体评分7-8 */
	static movie_midia_score_msg7 = "movie_midia_score_msg7";

	/** 1138  拍摄 --- 媒体评分8-9 */
	static movie_midia_score_msg8 = "movie_midia_score_msg8";

	/** 1139  拍摄 --- 媒体评分9-10 */
	static movie_midia_score_msg9 = "movie_midia_score_msg9";

	/** 1150  仓库 --- 拥有艺人提示 */
	static bag_own_actor_tips = "bag_own_actor_tips";

	/** 1151  仓库 --- 合成物品不足提示 */
	static bag_no_compound_tips = "bag_no_compound_tips";

	/** 1152  仓库 --- 未选择合成提示 */
	static bag_no_compound_choose_tips = "bag_no_compound_choose_tips";

	/** 1153  仓库 --- 未选择赠送提示 */
	static bag_no_send_choose_tips = "bag_no_send_choose_tips";

	/** 1154  仓库 --- 未选择拆分提示 */
	static bag_no_split_choose_tips = "bag_no_split_choose_tips";

	/** 1155  仓库 --- 未选择出售提示 */
	static bag_no_sell_choose_tips = "bag_no_sell_choose_tips";

	/** 1156  奥斯卡 --- 奥斯卡获奖发言标题 */
	static oscar_ presentation_title = "oscar_ presentation_title";

	/** 1157  奥斯卡 --- 奥斯卡预设发言1 */
	static oscar_default_presentation1 = "oscar_default_presentation1";

	/** 1158  奥斯卡 --- 奥斯卡预设发言2 */
	static oscar_default_presentation2 = "oscar_default_presentation2";

	/** 1159  奥斯卡 --- 奥斯卡预设发言3 */
	static oscar_default_presentation3 = "oscar_default_presentation3";

	/** 2022  订单 --- 订单完成失败 */
	static order_fail = "order_fail";

	/** 2023  订单 --- 查看未解锁的订单完成度 */
	static order_complete = "order_complete";

	/** 2024  订单 --- 已领取的奖励提示 */
	static order_received = "order_received";

	/** 2025  订单 --- npc默认提示 */
	static order_npc_default = "order_npc_default";

	/** 2026  公务 --- 公务倒计时 */
	static business_countdown = "business_countdown";

	/** 2027  公务 --- 自动批阅没有秘书 */
	static business_secretary = "business_secretary";

	/** 2028  公务 --- 全部公务批阅完毕 */
	static business_down = "business_down";

	/** 2029  探班 --- 探班倒计时 */
	static visit_countdown = "visit_countdown";

	/** 2030  探班 --- 自动接待没有秘书 */
	static visit_secretary = "visit_secretary";

	/** 2031  探班 --- 探班操作提示 */
	static visit_point = "visit_point";

	/** 2032  市场 --- 艺人国籍不对 */
	static market_envoy_wrong1 = "market_envoy_wrong1";

	/** 2033  市场 --- 艺人类型不对 */
	static market_envoy_wrong2 = "market_envoy_wrong2";

	/** 2034  市场 --- 艺人年龄不对 */
	static market_envoy_wrong3 = "market_envoy_wrong3";

	/** 2035  市场 --- 艺人数值不达标 */
	static market_envoy_wrong4 = "market_envoy_wrong4";

	/** 2051  市场 --- 艺人性别不对 */
	static market_envoy_wrong5 = "market_envoy_wrong5";

	/** 2052  市场 --- 美元不足 */
	static market_dollar_less = "market_dollar_less";

	/** 2053  市场 --- 路演失败 */
	static market_show_failure = "market_show_failure";

	/** 2036  剧本 --- 留言内容非法 */
	static story_comment_wrong = "story_comment_wrong";

	/** 2037  剧本 --- 点赞数不足 */
	static thumbsup_less = "thumbsup_less";

	/** 2038  剧本 --- 搜罗次数不足 */
	static story_search_less = "story_search_less";

	/** 2039  剧本 --- 街区等级需求 */
	static block_level_less = "block_level_less";

	/** 2040  剧本 --- 搜罗冷却加速成功 */
	static story_cd_success = "story_cd_success";

	/** 2041  会议 --- 会议倒计时提示 */
	static meeting_time = "meeting_time";

	/** 2042  秘书 --- 本日已购买提示 */
	static secretary_bought = "secretary_bought";

	/** 2043  秘书 --- 购买失败提示 */
	static secretary_buy_fail = "secretary_buy_fail";

	/** 2044  秘书 --- 未聘用秘书不能购买提示 */
	static sectrary_cannot_buy = "sectrary_cannot_buy";

	/** 2045  签到 --- 已签到提示 */
	static daily_sign = "daily_sign";

	/** 2046  设置 --- 功能未开放提示 */
	static setting_not_open = "setting_not_open";

	/** 2047  设置 --- 礼包兑换成功提示 */
	static gift_success = "gift_success";

	/** 2048  设置 --- 礼包已被兑换提示 */
	static gift_used = "gift_used";

	/** 2049  设置 --- 礼包码非法提示 */
	static gift_illegal = "gift_illegal";

	/** 2050  商城 --- 购买非时间段内商品 */
	static shop_period = "shop_period";

}