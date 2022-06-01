const headerTitle = document.querySelector('.header-title');

window.onscroll = function fadeOutTitle(){
    if(window.pageYOffset>140){
        headerTitle.style.opacity = 0;
        headerTitle.style.paddingBottom = 30+'rem';
        headerTitle.style.transform = 'scale(120%)'
    }else{
        headerTitle.style.opacity = 1;
        headerTitle.style.paddingBottom = 0;
        headerTitle.style.transform = 'scale(100%)'
    }
}

const rolTxtBox = document.querySelector('.rolling-text-box');


/*
function rollingImgBox(){
    for(let i=0; i<rolTxtBox.scrollWidth; i++)
}
function setLayout(){
    //각 스크롤 섹션의 높이 세팅
    for(let i=0; i<sceneInfo.length; i++){
        if(sceneInfo[i].type==='sticky'){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
        }else if (sceneInfo[i].type==='normal'){
            sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
        }
        sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }

    yOffset = window.pageYOffset;
    let totalScrollHeight = 0;
    for(let i = 0; i < sceneInfo.length; i++){
        totalScrollHeight += sceneInfo[i].scrollHeight;
        if(totalScrollHeight >= yOffset){
            currentScene = i;
            break;
        }
    }
    document.body.setAttribute('id', `show-scene-${currentScene}`);
}
*/