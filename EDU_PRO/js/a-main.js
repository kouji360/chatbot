$(function() {
    //画像出したい
    //内容によって画像変える
    // 下記の情報を持つオブジェクトを定義する
    // 1.キーワードのリスト
    // 2.返答内容
    // 3.画像の種類



    //リスナー
    $("#sendButton").click(function () {
        var val = $("#inputArea").val();
        $("#response").text(returnAnyKeyword(val));
        console.log(returnAnyKeyword(val));
    });
    class responseObj {
        constructor(keywordList, responseMsg, imgSrc) {
            this.keywordList = keywordList;
            this.responseMsg = responseMsg;
            this.imgSrc = imgSrc;
        }
    }


    //ロジック

    //オウム返し機能
    function returnOwm(tag) {
        return tag + "　ですね！";
    };


    function getResponseData() {
        //ここでjson読み込んで、レスポンスオブジェクトのリストを生成する
        var responseList = [];
        //とりあえず直打ち
        responseList.push(new responseObj(["ネオジオン", "シャア"], "ジークジオン！", "../image/笑顔５.png"));
        responseList.push(new responseObj(["空腹", "お腹すいた", "ごはん"], "どっか食べにいってきなよー", "../image/困り顔１.png"));
        responseList.push(new responseObj(["こんにちわ"], "こんにちわ", "../image/笑顔２.png"));
        responseList.push();

        return responseList;

    };


    //特定のキーワードに対して、特定の文字列を返す
    function returnAnyKeyword(keyStr) {
        // var tagMaps = new Map();
        // tagMaps.set('ジオン','ジークジオン！');
        // tagMaps.set('おはよう','おはようございます！');
        // tagMaps.set('こんにちは','こんにちは！');
        // tagMaps.set('こんばんわ','こんばんわ！');
        // var rtn = tagMaps.get(keyStr);

        const responseList = getJsonData();

        alert(responseList);

        for (let v of responseList) {
            const keywords = v.keywordList;
            alert(keywords);
            //キーワードに一致
            if (keywords.indexOf(keyStr) >= 0) {
                //画像切り替え
                $("#yukari").attr('src',v.imgSrc);
                //キーワードを返す
                return v.responseMsg;
            }
        }
        return "「" + keyStr + "」って、どういう意味ですか？";
    };

    function getJsonData(){
        var responseList = [];
        $.getJSON("../json/data-01.json" , function(data) {
            for (let v in data.data) {
                // alert(data.data[v].keywordList)
                // alert(data.data[v].responseMsg);
                // alert(data.data[v].imgSrc);
                const tag = new responseObj(
                    data.data[v].keywordList,
                    data.data[v].responseMsg,
                    data.data[v].imgSrc);
                alert(tag.keywordList);
                alert(tag.responseMsg);
                alert(tag.imgSrc);
                responseList.push(tag);
            }
        });
        return responseList;

    }


});
