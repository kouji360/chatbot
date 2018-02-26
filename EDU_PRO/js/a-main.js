$(function(){

$("#inputArea").change(function () {
    var val = $(this).val();
    if(val == "AAA"){
        alert("AAA");
    }
   });
    $("#sendButton").click(function () {
        var val = $("#inputArea").val();
        alert(returnAnyKeyword(val));
    });

    //オウム返し機能
    function returnOwm (tag) {
        return tag+"　ですね！";
    };


    //特定のキーワードに対して、特定の文字列を返す
    function returnAnyKeyword(keyStr){
        var tagMaps = new Map();
        tagMaps.set('ジオン','ジークジオン！');
        tagMaps.set('おはよう','おはようございます！');
        tagMaps.set('こんにちは','こんにちは！');
        tagMaps.set('こんばんわ','こんばんわ！');
        var rtn = tagMaps.get(keyStr);
        if(rtn == null){
            return "「"+keyStr+ "」って、どういう意味ですか？";
        }else{
            return rtn;
        }
    };


});
