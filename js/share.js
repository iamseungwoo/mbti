const url = 'https://cookielovetype.netlify.app/';

function setShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '쿠키 연애유형';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/' + (resultAlt+1) + '.png';
  const shareURL = url + 'page/result' + resultAlt + '.html';

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    }, 
    
    buttons: [
      {
        title: '결과확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL
        },
      },
    ]
  });
}