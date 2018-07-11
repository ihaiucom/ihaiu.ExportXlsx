/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
    /// 配置读取器列表
    export class ConfigManagerList
    {
        // 读取器列表
        renders: ConfigRenderInterface[] = [];


        activities  : ActivitiesConfigReader = new ActivitiesConfigReader();
        actor  : ActorConfigReader = new ActorConfigReader();
        actorAssets  : ActorAssetsConfigReader = new ActorAssetsConfigReader();
        actorLevel  : ActorLevelConfigReader = new ActorLevelConfigReader();
        actorLoyalty  : ActorLoyaltyConfigReader = new ActorLoyaltyConfigReader();
        actorProficiency  : ActorProficiencyConfigReader = new ActorProficiencyConfigReader();
        actorTrain  : ActorTrainConfigReader = new ActorTrainConfigReader();
        avatar  : AvatarConfigReader = new AvatarConfigReader();
        battleLevel  : BattleLevelConfigReader = new BattleLevelConfigReader();
        battleShootType  : BattleShootTypeConfigReader = new BattleShootTypeConfigReader();
        blockLevel  : BlockLevelConfigReader = new BlockLevelConfigReader();
        blockRankingList  : BlockRankingListConfigReader = new BlockRankingListConfigReader();
        blockWords  : BlockWordsConfigReader = new BlockWordsConfigReader();
        buildingEffect  : BuildingEffectConfigReader = new BuildingEffectConfigReader();
        buildingLevel  : BuildingLevelConfigReader = new BuildingLevelConfigReader();
        buildProperty  : BuildPropertyConfigReader = new BuildPropertyConfigReader();
        business  : BusinessConfigReader = new BusinessConfigReader();
        cinema  : CinemaConfigReader = new CinemaConfigReader();
        cityPopularize  : CityPopularizeConfigReader = new CityPopularizeConfigReader();
        compound  : CompoundConfigReader = new CompoundConfigReader();
        cooperateReward  : CooperateRewardConfigReader = new CooperateRewardConfigReader();
        cooperateTask  : CooperateTaskConfigReader = new CooperateTaskConfigReader();
        country  : CountryConfigReader = new CountryConfigReader();
        dailySign  : DailySignConfigReader = new DailySignConfigReader();
        dialogue  : DialogueConfigReader = new DialogueConfigReader();
        gameLevel  : GameLevelConfigReader = new GameLevelConfigReader();
        gameRandomName  : GameRandomNameConfigReader = new GameRandomNameConfigReader();
        giftPackage  : GiftPackageConfigReader = new GiftPackageConfigReader();
        global  : GlobalConfigReader = new GlobalConfigReader();
        guidesystem  : GuidesystemConfigReader = new GuidesystemConfigReader();
        headPortrait  : HeadPortraitConfigReader = new HeadPortraitConfigReader();
        item  : ItemConfigReader = new ItemConfigReader();
        loader  : LoaderConfigReader = new LoaderConfigReader();
        loading  : LoadingConfigReader = new LoadingConfigReader();
        mail  : MailConfigReader = new MailConfigReader();
        maintask  : MaintaskConfigReader = new MaintaskConfigReader();
        meeting  : MeetingConfigReader = new MeetingConfigReader();
        meetingGame  : MeetingGameConfigReader = new MeetingGameConfigReader();
        meetingRewards  : MeetingRewardsConfigReader = new MeetingRewardsConfigReader();
        meetingText  : MeetingTextConfigReader = new MeetingTextConfigReader();
        menu  : MenuConfigReader = new MenuConfigReader();
        movieAudienceEvaluation  : MovieAudienceEvaluationConfigReader = new MovieAudienceEvaluationConfigReader();
        movieDailyReward  : MovieDailyRewardConfigReader = new MovieDailyRewardConfigReader();
        movieDrop  : MovieDropConfigReader = new MovieDropConfigReader();
        movieExpect  : MovieExpectConfigReader = new MovieExpectConfigReader();
        movieLicence  : MovieLicenceConfigReader = new MovieLicenceConfigReader();
        movieMediaVisit  : MovieMediaVisitConfigReader = new MovieMediaVisitConfigReader();
        movieMidiaEvaluation  : MovieMidiaEvaluationConfigReader = new MovieMidiaEvaluationConfigReader();
        moviePopularize  : MoviePopularizeConfigReader = new MoviePopularizeConfigReader();
        movieShootType  : MovieShootTypeConfigReader = new MovieShootTypeConfigReader();
        msg  : MsgConfigReader = new MsgConfigReader();
        npc  : NpcConfigReader = new NpcConfigReader();
        order  : OrderConfigReader = new OrderConfigReader();
        orderComplete  : OrderCompleteConfigReader = new OrderCompleteConfigReader();
        oscar  : OscarConfigReader = new OscarConfigReader();
        perform  : PerformConfigReader = new PerformConfigReader();
        playerDefault  : PlayerDefaultConfigReader = new PlayerDefaultConfigReader();
        playerLevel  : PlayerLevelConfigReader = new PlayerLevelConfigReader();
        position  : PositionConfigReader = new PositionConfigReader();
        produce  : ProduceConfigReader = new ProduceConfigReader();
        produceLevel  : ProduceLevelConfigReader = new ProduceLevelConfigReader();
        produceSouvenir  : ProduceSouvenirConfigReader = new ProduceSouvenirConfigReader();
        property  : PropertyConfigReader = new PropertyConfigReader();
        randomName  : RandomNameConfigReader = new RandomNameConfigReader();
        randomSurname  : RandomSurnameConfigReader = new RandomSurnameConfigReader();
        recharge  : RechargeConfigReader = new RechargeConfigReader();
        secretary  : SecretaryConfigReader = new SecretaryConfigReader();
        secretaryGift  : SecretaryGiftConfigReader = new SecretaryGiftConfigReader();
        secretaryText  : SecretaryTextConfigReader = new SecretaryTextConfigReader();
        secretaryType  : SecretaryTypeConfigReader = new SecretaryTypeConfigReader();
        serverRankingList  : ServerRankingListConfigReader = new ServerRankingListConfigReader();
        settingDefault  : SettingDefaultConfigReader = new SettingDefaultConfigReader();
        settingText  : SettingTextConfigReader = new SettingTextConfigReader();
        sevenDays  : SevenDaysConfigReader = new SevenDaysConfigReader();
        sevenDaysText  : SevenDaysTextConfigReader = new SevenDaysTextConfigReader();
        shop  : ShopConfigReader = new ShopConfigReader();
        skill  : SkillConfigReader = new SkillConfigReader();
        skillEffect  : SkillEffectConfigReader = new SkillEffectConfigReader();
        skillTrigger  : SkillTriggerConfigReader = new SkillTriggerConfigReader();
        speak  : SpeakConfigReader = new SpeakConfigReader();
        starCon  : StarConConfigReader = new StarConConfigReader();
        story  : StoryConfigReader = new StoryConfigReader();
        storyCharacters  : StoryCharactersConfigReader = new StoryCharactersConfigReader();
        storyGoals  : StoryGoalsConfigReader = new StoryGoalsConfigReader();
        storyline  : StorylineConfigReader = new StorylineConfigReader();
        storyRate  : StoryRateConfigReader = new StoryRateConfigReader();
        storyStackItem  : StoryStackItemConfigReader = new StoryStackItemConfigReader();
        storyStackSort  : StoryStackSortConfigReader = new StoryStackSortConfigReader();
        storyTask  : StoryTaskConfigReader = new StoryTaskConfigReader();
        street  : StreetConfigReader = new StreetConfigReader();
        task  : TaskConfigReader = new TaskConfigReader();
        taskComplete  : TaskCompleteConfigReader = new TaskCompleteConfigReader();
        test  : TestConfigReader = new TestConfigReader();
        type  : TypeConfigReader = new TypeConfigReader();
        visit  : VisitConfigReader = new VisitConfigReader();


        // 初始化读取器列表
        initList()
        {

            this.renders.push(this.activities);
            this.renders.push(this.actor);
            this.renders.push(this.actorAssets);
            this.renders.push(this.actorLevel);
            this.renders.push(this.actorLoyalty);
            this.renders.push(this.actorProficiency);
            this.renders.push(this.actorTrain);
            this.renders.push(this.avatar);
            this.renders.push(this.battleLevel);
            this.renders.push(this.battleShootType);
            this.renders.push(this.blockLevel);
            this.renders.push(this.blockRankingList);
            this.renders.push(this.blockWords);
            this.renders.push(this.buildingEffect);
            this.renders.push(this.buildingLevel);
            this.renders.push(this.buildProperty);
            this.renders.push(this.business);
            this.renders.push(this.cinema);
            this.renders.push(this.cityPopularize);
            this.renders.push(this.compound);
            this.renders.push(this.cooperateReward);
            this.renders.push(this.cooperateTask);
            this.renders.push(this.country);
            this.renders.push(this.dailySign);
            this.renders.push(this.dialogue);
            this.renders.push(this.gameLevel);
            this.renders.push(this.gameRandomName);
            this.renders.push(this.giftPackage);
            this.renders.push(this.global);
            this.renders.push(this.guidesystem);
            this.renders.push(this.headPortrait);
            this.renders.push(this.item);
            this.renders.push(this.loader);
            this.renders.push(this.loading);
            this.renders.push(this.mail);
            this.renders.push(this.maintask);
            this.renders.push(this.meeting);
            this.renders.push(this.meetingGame);
            this.renders.push(this.meetingRewards);
            this.renders.push(this.meetingText);
            this.renders.push(this.menu);
            this.renders.push(this.movieAudienceEvaluation);
            this.renders.push(this.movieDailyReward);
            this.renders.push(this.movieDrop);
            this.renders.push(this.movieExpect);
            this.renders.push(this.movieLicence);
            this.renders.push(this.movieMediaVisit);
            this.renders.push(this.movieMidiaEvaluation);
            this.renders.push(this.moviePopularize);
            this.renders.push(this.movieShootType);
            this.renders.push(this.msg);
            this.renders.push(this.npc);
            this.renders.push(this.order);
            this.renders.push(this.orderComplete);
            this.renders.push(this.oscar);
            this.renders.push(this.perform);
            this.renders.push(this.playerDefault);
            this.renders.push(this.playerLevel);
            this.renders.push(this.position);
            this.renders.push(this.produce);
            this.renders.push(this.produceLevel);
            this.renders.push(this.produceSouvenir);
            this.renders.push(this.property);
            this.renders.push(this.randomName);
            this.renders.push(this.randomSurname);
            this.renders.push(this.recharge);
            this.renders.push(this.secretary);
            this.renders.push(this.secretaryGift);
            this.renders.push(this.secretaryText);
            this.renders.push(this.secretaryType);
            this.renders.push(this.serverRankingList);
            this.renders.push(this.settingDefault);
            this.renders.push(this.settingText);
            this.renders.push(this.sevenDays);
            this.renders.push(this.sevenDaysText);
            this.renders.push(this.shop);
            this.renders.push(this.skill);
            this.renders.push(this.skillEffect);
            this.renders.push(this.skillTrigger);
            this.renders.push(this.speak);
            this.renders.push(this.starCon);
            this.renders.push(this.story);
            this.renders.push(this.storyCharacters);
            this.renders.push(this.storyGoals);
            this.renders.push(this.storyline);
            this.renders.push(this.storyRate);
            this.renders.push(this.storyStackItem);
            this.renders.push(this.storyStackSort);
            this.renders.push(this.storyTask);
            this.renders.push(this.street);
            this.renders.push(this.task);
            this.renders.push(this.taskComplete);
            this.renders.push(this.test);
            this.renders.push(this.type);
            this.renders.push(this.visit);
        }
        
    }
}