// menu overlay
const elementIconMenu = document.querySelector(".fa-bars");
const elementMenuOverlay = document.querySelector(".menu");
const elementHeader = document.querySelector('#header');

let menuElementA = elementMenuOverlay.getElementsByTagName('a');
function changeMenu() {
    elementIconMenu.addEventListener('click', () => {
        elementIconMenu.classList.toggle('fa-times');
        document.getElementById('typing').classList.toggle('hidden');
        elementMenuOverlay.classList.toggle('active-menu')


    })
}

textAnimation
let text = 'Hi ! My name is Hieu I\'m a developer...';
let i = 0;

function textAnimation() {

    if (i < text.length) {

        document.getElementById('typing').innerHTML += text.charAt(i++);;

        setTimeout(textAnimation, 200);
    }
}
function scrollSrceen() {
    let menuElementA = elementMenuOverlay.getElementsByTagName('a');
    menuElementA  = [...menuElementA];

    window.addEventListener('scroll', (e) => {
        menuElementA.forEach(element => {
        if (window.scrollY > 50) {
            console.log(element);
            element.classList.add('menu-a-scroll');
        }
        else {
            element.classList.remove('menu-a-scroll');
        }
    });

    })
    const elementHtml = document.querySelector('.html-span');
    const elementCss = document.querySelector('.css-span');
    const elementJs = document.querySelector('.js-span');
    window.addEventListener('scroll',()=>{
        if(window.scrollY > elementHtml.clientHeight){
            elementHtml.style.width = '70%'
            elementCss.style.width = '60%';
            elementJs.style.width ='50%';
        }
        else{
            elementHtml.style.width = '0'
            elementCss.style.width = '0';
            elementJs.style.width ='0';
        }
    })
    window.addEventListener('scroll', (e) => {
        
        if (window.scrollY > 50) {
           
           
            elementHeader.classList.add('scroll-header');
        }
        else {
            elementHeader.classList.remove('scroll-header');
        }

    })
    window.addEventListener('scroll', () => {

  let elementInfor = document.querySelectorAll('.infor');
        let elementViewMore =document.querySelectorAll('.view-infor');
      
        elementInfor = [...elementInfor];
        elementViewMore =[...elementViewMore];
  
        elementInfor.forEach(element => {
             if (window.scrollY > 513) {
                
                element.classList.add('done-scroll');
            }
            else {
                element.classList.remove('done-scroll');
            }
        });
           
        });

}
function pickViewPoto() {
    let elementProjectPoto = document.querySelector('.project-poto');
    let elementButtonProjectPoto = document.querySelector('.button-project-poto');
    let listImgRender = [
        {
            url : './img/dog1.jpg',
            id :1
        },
        {
            url : './img/dog2.jpg',
            id :1
        },
        {
            url : './img/screen-1.jpg',
            id :2
        },
        {
            url : './img/screen-0.jpg',
            id :2
        },
        {
            url : './img/screen-2.jpg',
            id :2
        }
    ]
    
    function renderProjectImg(listImg){
        
        listImg.forEach(url => {
            var spanImg = document.createElement('div');
            spanImg.setAttribute('class', 'img-project');
            spanImg.setAttribute('key', `${url.id}`);
              spanImg.style.backgroundImage = "url" +"(" +url.url +")";
              elementProjectPoto.appendChild(spanImg);
    
    
          });
    }
    renderProjectImg(listImgRender);
    elementButtonProjectPoto.addEventListener('click',(e)=>{
        
        let key =  e.target.attributes.key.value;
        
        listImgRendeFilter = listImgRender.filter((value)=>{
          return value.id != key;
        })
        elementProjectPoto.innerHTML = '';
        renderProjectImg(listImgRendeFilter);
    
    })
}
function main() {
    changeMenu();
    textAnimation();
    scrollSrceen();
    pickViewPoto();

}
main();