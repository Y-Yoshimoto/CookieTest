jQuery(document).ready(function() {
    //ページ読み込み時に実行
    cookies = document.cookie;
    console.log(cookies);
    $('#cookiedata').val(cookies)

    //setCookie
    $('#setCookie').on('click', function() {
        if (BoolCookie()) {
            $('#setCookieMessage').text("すでにセットされています。")
        } else {
            document.cookie = 'date='+ new Date() +';max-age=120';
            $('#setCookieMessage').text("セットしました。")
        }
    })

    //deleteCookie
    $('#deleteCookie').on('click', function() {
        if (BoolCookie()) {
            document.cookie = 'date=NULL;max-age=0';
            $('#deleteCookieMessage').text("削除しました。")
        } else {
            $('#deleteCookieMessage').text("セットされていません。")

        }
    })

    //checkCookie
    $('#checkCookie').on('click', function() {
        if (BoolCookie()) {
            $('#checkCookieMessage').text("セットされています。")
            cookies = document.cookie;
            console.log(cookies);
            $('#cookiedata').val(cookies)
        } else {
            $('#checkCookieMessage').text("セットされていません。")
        }
    })
});

// Cookieの有無を確認
function BoolCookie() {
    //ブラウザのクッキ情報を取得
    cookies = document.cookie;
    // クッキーがすでに設定されているかを判定
    //BooleanCheck = cookies.indexOf("data", 0);
    // クッキがセットされていれば"TRUE"
    return (cookies.indexOf("date", 0) !== -1) ? true : false;
}
