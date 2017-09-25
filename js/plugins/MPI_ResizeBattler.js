//===========================================================================
// MPI_ResizeBattler.js
//===========================================================================

/*:
 * @plugindesc バトラー画像（敵キャラ画像、サイドビュー時のアクター画像）の大きさを指定できます。
 * @author 奏ねこま（おとぶき ねこま）
 *
 * @param タグ名
 * @desc メモ欄に記述するタグの名前を変更できます。他のプラグインと被った場合は変更してください。
 * @default BattlerScale
 *
 * @help
 * [ 概要 ] ...
 *  バトラー画像（敵キャラ画像、サイドビュー時のアクター画像）の大きさを、任意の
 *  大きさに変更します。
 *
 * [ 使用方法 ] ...
 *  アクター、または敵キャラのメモ欄に、以下のように記述してください。
 *
 *   <BattlerScale:2>
 *
 *  上記の記述の場合、2倍で表示されます。3倍なら「3」、4倍なら「4」を指定してく
 *  ださい。値には小数点数を指定することもできます。
 *
 *   <BattlerScale:1.5>
 *
 *  また、以下のように記述することで、変数を指定することもできます。
 *
 *   <BattlerScale:\v[1]>
 *
 *  上記の記述の場合、変数#0001の値をもとに倍率表示します。
 *
 * [ 変数に小数点数を設定する方法 ] ...
 *  イベントコマンドの「変数の操作...」で値を設定すると、スクリプトを使っても
 *  整数にされてしまいます（1.5と指定すると1にされてしまう）。
 *  変数に小数点数を設定したい場合は、イベントコマンドの「スクリプト」で、以下
 *  のように記述してください。
 *
 *   $gameVariables._data[1] = 1.5
 *
 *  上記の記述の場合、変数#0001に1.5を設定します。
 *
 * [ タグ名の変更 ] ...
 *  デフォルトでは、メモ欄に「<BattlerScale:2>」のように記述するようになっていま
 *  すが、他のプラグインで同じ「BattlerScale」というタグ名を使用している場合は、
 *  プラグインパラメータで任意のタグ名に変更できます。
 *
 * [ プラグインコマンド ] ...
 *  プラグインコマンドはありません。
 *
 * [ 利用規約 ] ................................................................
 *  ・本プラグインの利用は、RPGツクールMV/RPGMakerMVの正規ユーザーに限られます。
 *  ・商用、非商用、有償、無償、一般向け、成人向けを問わず、利用可能です。
 *  ・利用の際、連絡や報告は必要ありません。また、製作者名の記載等も不要です。
 *  ・プラグインを導入した作品に同梱する形以外での再配布、転載はご遠慮ください。
 *  ・不具合対応以外のサポートやリクエストは、基本的に受け付けておりません。
 *  ・本プラグインにより生じたいかなる問題についても、一切の責任を負いかねます。
 * [ 改訂履歴 ] ................................................................
 *   Version 1.00  2016/10/28  First edition.
 * -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
 *  Web Site: http://makonet.sakura.ne.jp/rpg_tkool/
 *  Twitter : https://twitter.com/koma_neko
 *  Copylight (c) 2016 Nekoma Otobuki
 */

var Imported = Imported || {};
Imported.MPI_ResizeBattler = true;

var Makonet = Makonet || {};
Makonet.RSB = {};

(function(){
    'use strict';

    var RSB        = Makonet.RSB;
    RSB.product    = 'MPI_ResizeBattler';
    RSB.parameters = PluginManager.parameters(RSB.product);
    RSB.tag        = RSB.parameters['タグ名'] || 'BattlerScale';
    
    function _(object) {
        return object[RSB.product] = object[RSB.product] || {}
    }

    function _variable2value(text) {
        while (text && text.match(/\\v\[\d+\]/i)) {
            text = text.replace(/\\v\[(\d+)\]/gi, function(){
                return $gameVariables.value(+arguments[1]);
            });
        }
        return text;
    }

    //==============================================================================
    // Sprite_Battler
    //==============================================================================

    var _Sprite_Battler_update = Sprite_Battler.prototype.update;
    Sprite_Battler.prototype.update = function() {
        _Sprite_Battler_update.call(this);
        if (this._battler) {
            var battler = (this._battler.isActor()) ? this._battler.actor() : this._battler.enemy();
            if (battler.meta[RSB.tag]) {
                var scale = +_variable2value(battler.meta[RSB.tag]) || 1.0;
                this.scale.x = scale;
                this.scale.y = scale;
            }
        }
    };
}());
