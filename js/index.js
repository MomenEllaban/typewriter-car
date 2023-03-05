$('.pageContent, .resourseContainer, .helpContainer').css('height',  (100)+'vh');
$('.pageBg').css('height',  (100)+'vh');
$('.header, .footer').css('height',  (960*13/100)+'px');

var pageWidth, pageHeight;

var basePage = {
  width: 1280,
  height: 960,
  scale: 1,
  scaleX: 1,
  scaleY: 1
};

$(function(){
  var $page = $('.page_content');
  
  getPageSize();
  scalePages($page, pageWidth, pageHeight);
  
  //using underscore to delay resize method till finished resizing window
  $(window).resize(_.debounce(function () {
    getPageSize();            
    scalePages($page, pageWidth, pageHeight);
  }, 150));
  

function getPageSize() {
  pageHeight = $('#container').height();
  pageWidth = $('#container').width();
}

function scalePages(page, maxWidth, maxHeight) {            
  var scaleX = 1, scaleY = 1;                      
  scaleX = maxWidth / basePage.width;
  scaleY = maxHeight / basePage.height;
  basePage.scaleX = scaleX;
  basePage.scaleY = scaleY;
  basePage.scale = (scaleX > scaleY) ? scaleY : scaleX;

 // var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
 // var newTopPos = Math.abs(Math.floor(((basePage.height * basePage.scale) - maxHeight)/2));
 var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
  var newTopPos = 0;
  page.attr('style', '-webkit-transform:scale(' + basePage.scale + ');left:' + newLeftPos + 'px;top:' + newTopPos + 'px;');
}
});


const textDisplay = document.getElementById('text')

const phrases = [
  "اللى تمامه الجنيه , مقدور عليه",
  "عاشر السبع لو اكلك , ولا تعاشر النذل لو حملك",
  "الباشا من هيبته بيتشتم فى غيبته",
  "راحو الحبايب ابو حماصه ",
  "العيب مش فى الحديده, العيب فى السواقين الجديده",
  "ماشيه براحتها عشان خايفه على صحتها",
  "ديه مش غنا ديه ستر من عند ربنا",
  "اللي كانوا تلاميذنا.. فاكرينّا عجزنا",
  "حرك شفايفك عشان مش شايفك",
  "زى ما في شامبو ضد القشرة في صحاب خانت العشرة",
  "لو انت بابا في المجال، ف أنا أبقى جد العيال",
  "اوعي تعمل الغلط وتقول مضطر.. هو ينفع تلبس شتوي وتقول الدنيا حر",
  " لو فاكر نفسك أحسن مني هخليك في يوم تيجي تقول لي علمني",
  "لو مفيش حد بيغلط مكانوش حطوا فوق القلم أستيكة",
  "اسأل عني هيقولولك حاجتين معروف بالاحترام ومالوش في الحرام",
  "كنت عصفور اكلونى , عملت اسد صاحبونى",
  "الصاحب الجدع مالوش مرتجع"
];



let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop();






