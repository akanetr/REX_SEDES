//=============================================================================
// BB_SnowControler.js
// Copyright (c) 2016 BB ENTERTAINMENT
//=============================================================================

/*:
 * @plugindesc 雪の方向指定プラグイン
 * @author ビービー
 * 
 * @param SnowControlValue
 * @desc 雪の降る方向を指定する変数のID。
 * デフォルト：1
 * @default 1
 * 
 * @help プラグインの説明
 * 
 * 雪の降る方向を"通常""左から右""右から左""下から上"の四方向から選べるようになります。
 * 降る方向はパラメータのSnowControlValueで指定した変数の値によって変更されます。
 * 0＝デフォルト
 * 1＝左から右
 * 2＝右から左
 * 3＝下から上
 * 
 * 
 * 利用規約：
 * このプラグインは、MITライセンスのもとで公開されています。
 * Copyright (c) 2016 BB ENTERTAINMENT
 * Released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 * 
 * コンタクト：
 * BB ENTERTAINMENT Twitter: https://twitter.com/BB_ENTER/
 * BB ENTERTAINMENT BLOG   : http://bb-entertainment-blog.blogspot.jp/
 */


(function() {

//-----------------------------------------------------------------------------
// プラグインパラメータ管理
//-----------------------------------------------------------------------------
var parameters = PluginManager.parameters('BB_SnowControler');
var BBsnow = Number(parameters['SnowControlValue']);

//-----------------------------------------------------------------------------
// 雪操作
//-----------------------------------------------------------------------------
var _Weather_prototype__updateSnowSprite = Weather.prototype._updateSnowSprite;
Weather.prototype._updateSnowSprite = function(sprite) {
    sprite.bitmap = this._snowBitmap;
    sprite.rotation = Math.PI / 16;
    if($gameVariables.value(BBsnow) == 2){
        sprite.ax -= 32 * Math.sin(sprite.rotation);
    } else if($gameVariables.value(BBsnow) == 1){
        sprite.ax += 32 * Math.sin(sprite.rotation);
    } else {
        sprite.ax -= 3 * Math.sin(sprite.rotation);
    };
    if($gameVariables.value(BBsnow) == 3){
        sprite.ay -= 3 * Math.cos(sprite.rotation);
    } else {
        sprite.ay += 3 * Math.cos(sprite.rotation);
    };
    sprite.opacity -= 3;
};

})();