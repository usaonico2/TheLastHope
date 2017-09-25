// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"notWinAction","status":true,"description":"特定のスイッチがONになっているときに勝利のポーズを\r\nとらなくすることができます。","parameters":{"notWinActionSwitchId":"1"}},
{"name":"AnimationMapName","status":true,"description":"ver1.03/マップ名表示をアニメーションさせます。","parameters":{"Pattern Variable ID":"","Anime Font Size":"28","Anime Pattern":"Normal","Anime Count":"300","Anime OriginalX":"0","Anime OriginalY":"-60","Anime MoveX":"0","Anime MoveY":"60","Fill Rect Color":"rgba(0,0,0,0.5)","Back Picture":""}},
{"name":"BattleResultsPopup","status":true,"description":"戦闘結果の表示をポップアップ形式に変更します。","parameters":{}},
{"name":"CommonPopupCore","status":true,"description":"ver1.04/汎用的なポップアップの仕組みを提供するためのベースプラグインです。","parameters":{"Text Back Color":"rgba(0,0,0,0.6)","Text Back FileName":"popup_back%d"}},
{"name":"GetInformation","status":true,"description":"ver1.12/アイテムの入手などにスライドアニメするインフォメーションを追加するプラグインです。","parameters":{"Info Disable Switch Id":"99","Use Battle Info":"true","Use Rewards Info":"true","Info Pattern":"GrowUp","Info Font Size":"20","Info Count":"120","Info Delay":"20","Info MoveWait":"100","Info MoveFade":"10","Info Position":"","Info Slide Action":"","Info Sup X":"0","Info Sup Y":"0","Info Width":"816","Gold Icon Index":"314","Actor Icon Start Index":"320","Battle Show List":"item,gold,exp,skill,params,level,abp,classLevel","Get Gold Text":"「\\I[_icon]_num\\C[14]\\G\\C[0]」 を\\C[24]手に入れた！","Lost Gold Text":"「\\I[_icon]_num\\C[14]\\G\\C[0]」 を\\C[2]失った・・・","Get Item Text":"「\\I[_icon]_name」 を\\C[24]手に入れた！\\n\\C[6]_desc1","Lost Item Text":"","Get Item Text Num":"「\\I[_icon]_name」 を\\C[14]_num個\\C[24]手に入れた！\\n\\C[6]_desc1","Lost Item Text Num":"「\\I[_icon]_name」を\\C[14]_num個\\C[2]失った・・・\\n\\C[6]_desc1","Get Skill Text":"_actorは「\\I[_icon]_name」 を\\C[24]覚えた！\\n\\C[6]_desc1","Lost Skill Text":"_actorは「\\I[_icon]_name」を \\C[2]忘れてしまった・・・\\n\\C[6]_desc1","Exp Up Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[24]得た！","Exp Down Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[2]失った・・・","Lv Up Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！","Lv Down Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・","Param Up Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！","Param Down Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・","Abp Up Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[24]得た！","Abp Down Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[2]失った・・・","Class Lv Up Text":"_actorは\\C[4]_classの_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！","Class Lv Down Text":"_actorは\\C[4]_classの_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・"}},
{"name":"HIME_EquipSlotsCore","status":true,"description":"v1.5 - Provides you with tools to set up custom equip slots\r\nfor each actor individually.","parameters":{}},
{"name":"Hurry_ActorSpriteAdjust","status":true,"description":"パーティ人数によってSVアクターの位置を自動調整します","parameters":{"CenterAdjustX":"16","CenterAdjustY":"24","ActorHomeX":"600","ActorHomeY":"280","DistanceX":"32","DistanceY":"48"}},
{"name":"PassiveSkill","status":true,"description":"ver1.061/スキルに特徴を設定できるようにします。","parameters":{"Passive Skill Type ID":"65,86,87","Add Multi Order":"true"}},
{"name":"PromptlyPopup","status":true,"description":"複数攻撃時のポップアップを一括表示します","parameters":{"text":"1"}},
{"name":"DestinationWindow","status":true,"description":"行動目標ウィンドウプラグイン","parameters":{"表示スイッチID":"1","イベント中は閉じる":"ON","ウィンドウX座標":"24","ウィンドウY座標":"30","ウィンドウ横幅":"320","ウィンドウ不透明度":"255","ウィンドウスキン名":"","フェード時間":"8","フォントサイズ":"22","メニュー画面に表示":"OFF","自働調整":"ON"}},
{"name":"AB_SymbolEncounter","status":true,"description":"出現位置がランダムなシンボルエンカウントシステム","parameters":{"FindBalloon":"1","LoseBalloon":"2","FindMoveSpeed":"4","NormalMoveSpeed":"3","AppearanceTime":"100","SightArea":"5","WarpTryTime":"10","ChaseArea":"8","AppearanceArea":"15","WarpArea":"10","LoseCount":"100","MinWaitTime":"60","RndWaitTime":"60","SightColor":"red","SightVisibleSwId":"98","SightOpacity":"64","StareCountMin":"180","FollowersThrough":"0"}},
{"name":"MPP_ActiveTimeBattle","status":true,"description":"【ver.1.6】戦闘システムをアクティブタイムバトルに変更します。","parameters":{"=== Option ===":"","ATB Mode Default":"1","ATB Mode Name":"戦闘モード","ATB Mode Status":"アクティブ,ウェイト","ATB Speed Default":"4","ATB Speed Name":"戦闘速度","ATB Speed Status":"1,2,3,4,5","=== Battle ===":"","ATB Speed Base":"6","AT Increment":"15","Reset AT Die?":"true","Need Escape At":"100","Escape AT Cost":"75","Escape Anime?":"false","Input Step Forward?":"true","ATB Fast Eneble?":"true","ATB Fast Rate":"3","Fast Log Eneble?":"true","=== HelpWindow ===":"","Help Window Pos":"1","Help Window Row":"1","=== StatusWindow ===":"","Status Window Pos":"2","=== AT Gauge ===":"","AT Gauge Name":"","AT Gauge Width":"60","AT Gauge Height":"12","AT Charge Color1":"192,192,192","AT Charge Color2":"255,255,255","AT Max Color1":"192,192,192","AT Max Color2":"255,255,192","Chanting View?":"true","AT Chanting Color1":"128,32,0","AT Chanting Color2":"255,64,0","Escaping Change?":"true","AT Escaping Color1":"192,192,192","AT Escaping Color2":"192,192,255"}},
{"name":"notWinAction","status":true,"description":"特定のスイッチがONになっているときに勝利のポーズを\r\nとらなくすることができます。","parameters":{"notWinActionSwitchId":"3"}},
{"name":"AltMenuScreen","status":true,"description":"メニュー画面のレイアウトを変更します。","parameters":{}},
{"name":"MPI_ResizeBattler","status":true,"description":"バトラー画像（敵キャラ画像、サイドビュー時のアクター画像）の大きさを指定できます。","parameters":{"タグ名":"拡大"}},
{"name":"BattleEffectPopup","status":true,"description":"戦闘行動結果ポップアッププラグイン","parameters":{"クリティカル":"CRITICAL!","クリティカルカラー":"255,0,0,255","回避":"Avoid!","回避カラー":"0,128,255,255","ミス":"Miss!","ミスカラー":"0,0,0,0","無効":"Invalid!","無効カラー":"0,0,0,0","ガード":"Guard!","ガードカラー":"0,128,255,255","魔法反射":"Reflection!","魔法反射カラー":"0,128,255,255","反撃":"Counter!","反撃カラー":"0,128,255,255","弱点":"Weakness!","弱点カラー":"0,255,128,255","弱点閾値":"110","耐性":"Resistance!","耐性カラー":"0,0,128,255","耐性閾値":"90","味方ダメージカラー":"0,0,0,0","敵ダメージカラー":"0,0,0,0","フォントサイズ":"42","メッセージ最大幅":"240","フラッシュ時間":"60","X座標補正":"0","Y座標補正":"-40","イタリック表示":"ON","縁取り表示":"ON","画像使用":"OFF"}},
{"name":"dsEquipmentSkillLearning","status":true,"description":"装備に設定されたスキルを習得するプラグイン ver1.06","parameters":{"Lp":"LP","Basic Reward Lp":"1","Reward Lp Text":"%1 の%2を獲得！","Show Reward Lp Text":"true","Learning Skill Text":"%1は%2を覚えた！","Usable Equipment Skill":"true","Show Lp Gauge":"true","Show Lp Value":"false","Lp Value Font Size":"18","Lp Aftermath Enable":"true","Lp Aftermath Caption":"LP獲得","Lp Aftermath Format":"+%1\\c[4]%2\\c[0]","Lp Aftermath Earned":"獲得LP"}},
{"name":"EquipAndShopStatusR","status":true,"description":"ver1.08/装備&ショップシーンのステータス表示を改造します。","parameters":{"【ステータスの設定】":"","Stand Opacity":"128","Font Size":"24","Top Space":"0","Page Icon Offset Y":"-12","Line Spacing":"4","Max Page Line":"14","Slot Height":"224","Equip Status Help Text":"←→:ページの切替 QW:キャラの切替","Equip Status Help Text2":"←→:ページの切替","Use Slot Compact":"true","":"","【内容の設定】":"","Basic Params":"name,level,class,l","Page1":"hp,mp,l,atk,def,mat,mdf,agi,luk","Page2":"hit,eva,cri,mev,mrf,cev,cnt,hrg,mrg,trg","Page3":"tgr,grd,rec,pha,mcr,tcr,pdr,mdr,fdr,exr","Page4":"e1,e2,e3,e4,e5,e6,e7,e8,e9","Page5":"s4,s5,s6,s7,s8,s9,s10","Page6":"d0,d1,d2,d3,d4,d5,d6,d7","【ショップの設定】":"","Is Refine Shop Status":"true","Max Shop Equip Page Line":"7","Max Shop Item Page Line":"13","Shop Info":"price,l,effects","Equip Info":"price","Page Icon Color":"rgb(192,255,192)","Item Help Text":"←→:ページの切替","Equip Help Text":"←→:ページの切替 QW:キャラの切替","Performance Icon Position Y":"18","Performance Icon Up":"▲","Performance Icon Down":"▼","Performance Icon Equal":"＝","Performance Icon Equipped":"E","【用語の設定】":"","Effect Name":"有効度","Down Name":"低下有効度","Item Type Text":"アイテムタイプ","Consume Text":"消耗","Damage Type Text":"ダメージタイプ","Price Text":"値段","Scope Text":"効果範囲","Occasion Text":"使用可能時","Repeat Text":"発動回数","TpGain Text":"得ＴＰ","Equip Type Text":"装備タイプ","Weapon Type Text":"武器タイプ","Armor Type Text":"防具タイプ","Turn Text":"ターン","Escape Text":"逃げる","Scope Vocab":"なし,敵単体,敵全体,敵1体 ランダム,敵2体 ランダム,敵3体 ランダム,敵4体 ランダム,味方単体,味方全体,味方単体(戦闘不能),味方全体(戦闘不能),使用者","Item Type Vocab":"通常アイテム,貴重品,隠しアイテムA,隠しアイテムB","Consume Vocab":"消耗する,消耗しない","Occasion Vocab":"常時,バトル,メニュー,使用不可","Damage Vocab":"なし,HPダメージ,MPダメージ,HP回復,MP回復,HP吸収,MP吸収","Xparam Names":"命中,回避,会心率,会心回避,魔法回避,魔法反射,反撃,HP再生率,MP再生率,TP再生率","Sparam Names":"狙われ率,防御効果率,回復効果率,薬の知識,MP消費率,TPチャージ率,物理ダメージ率,魔法ダメージ率,床ダメージ率,経験値獲得率","Effects Names":"HP回復,HPダメージ,MP回復,MPダメージ,TP増加,ステート付与,ステート解除,強化付与,弱体付与,強化解除,弱体解除,特殊効果,成長,スキル習得,コモン","【オプション】":"","Use Equip Command":"true","Equipped Limit Color":"6"}},
{"name":"ExtendWeaponImageConfig","status":true,"description":"武器グラフィックについて、より細かく設定できるようになります。","parameters":{}},
{"name":"WeaponSkill","status":true,"description":"武器ごとに通常攻撃のスキルIDを変更します。","parameters":{}},
{"name":"UCHU_MobileOperation","status":true,"description":"スマホ操作用プラグイン。横持ち/縦持ちに対応した仮想ボタン、\r\nタッチ操作の方法を追加拡張し、スマホプレイを快適にします。","parameters":{"---PC Option---":"","PC BtnDisplay":"false","PC TouchExtend":"true","---File Path---":"","DPad Image":"./img/system/DirPad.png","ActionBtn Image":"./img/system/ActionButton.png","CancelBtn Image":"./img/system/CancelButton.png","---Button Customize---":"","Button Opacity":"0.7","Vertical BtnZoom":"1.7","Tablet BtnZoom":"0.8","TabVertical BtnZoom":"1.1","HideButton OnMessage":"true","DPad Visible":"true","DPad Size":"200","DPad Margin":"10; 10","DPad Orientation":"left; bottom","DPad OpelationRange":"1.3","DPad DiagonalRange":"0.3","ActionBtn Visible":"true","ActionBtn Size":"100","ActionBtn Margin":"10; 90","ActionBtn Orientation":"right; bottom","CancelBtn Visible":"true","CancelBtn Size":"100","CancelBtn Margin":"110; 10","CancelBtn Orientation":"right; bottom","---TouchInput Extend---":"","Flick PageUp-PageDown":"true","HoldCanvas ActionBtn":"false","OutCanvas CancelBtn":"false","OutCanvas ActionBtn":"false","--!need AnalogMove.js!--":"","Analog Move":"false","Analog Sensitivity":"1.8"}}
];
