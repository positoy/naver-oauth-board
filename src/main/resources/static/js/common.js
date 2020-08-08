const naverOauthLoginURL = (function () {
    function encodeQueryData(data) {
        const ret = [];
        for (let d in data)
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        return ret.join('&');
    }

    param = {
        response_type: 'code',
        client_id: 'AlS3TCLxJYn7SNPp75LE',
        redirect_uri:
            'http://ec2-13-209-47-82.ap-northeast-2.compute.amazonaws.com:8080/login/naver',
        state: 'hello',
    };

    return (
        'https://nid.naver.com/oauth2.0/authorize' +
        '?' +
        encodeQueryData(param)
    );
})();

window.onload = function () {
    let a = document.createElement('a');
    a.href = naverOauthLoginURL;
    a.append('네이버 아이디로 로그인하기');

    let div = document.getElementById('NaverLogin');
    div.append(a);
};
