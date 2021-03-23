import { ACTION_MOVE } from "./ComicsConstants";
var createDescription;
export const Navigation = (isNext = false, transcriptCount = 0, transcriptionArray) => {
    let coordsX = 0;
    let coordsY = 0;
    let countImage = 0;
    let lastImageWidth = 0;
    let line = 0;
    createDescription = setTimeout(() => {
        const comics = document.getElementById('comics__content');
        const transcript = document.createElement('div');
        transcript.className = 'comics__description';
        transcript.id = 'comics__description';
        transcript.innerHTML = `<p>${transcriptionArray[transcriptCount]}</p>`
        comics.insertAdjacentElement('afterend', transcript)
        clearTimeout(createDescription)
    }, 0)
    const toStart = (e) => { // была идея вынести всю логику в отдельный хелпер, не стал этого делать, так как разрешили оставить как есть

        // логика применима только для данного комикса, как и весь проект в целом, в задании так и требовалось, сделать именно для этого комикса на чистом JS, HTML, CSS
        // без использования каких либо библиотек

        if (Object.keys(ACTION_MOVE).includes(e.target.className)) { 
            const transcript = document.getElementById('comics__description');
            const wrapper = document.getElementById('comics');
            const next = document.getElementById('comics__image');
    
            if (ACTION_MOVE[e.target.className] === "TO_END") {
                transcriptCount = transcriptionArray.length - 2 //так как последний элемент не относится к описанию картинки
                transcript.innerHTML = `<p>${transcriptionArray[transcriptCount]}</p>`
                line = 4;
                countImage = -1;
                coordsY = -636;
                next.style.backgroundPosition = `0px -636px`
                next.style.width = `619px`
                wrapper.style.maxWidth = `850px`
                return
            }
    
    
            if ((line > 3 && ACTION_MOVE[e.target.className] === "NEXT") || (line === 0 && ACTION_MOVE[e.target.className] === "PREV" && countImage === 0)) {
                return
            }
    
            if (ACTION_MOVE[e.target.className] === "TO_START") {
                line = 0;
                countImage = 0;
                coordsX = 0;
                coordsY = 0;
                transcriptCount = 0;
                transcript.innerHTML = `<p>${transcriptionArray[transcriptCount]}</p>`
                wrapper.style.maxWidth = `585px`
                next.style.width = `145px`
                next.style.backgroundPosition = `0px 0px`
                return
            }

            transcriptCount = ACTION_MOVE[e.target.className] === "NEXT"
                ? transcriptCount += 1
                : transcriptCount -= 1

            transcript.innerHTML = `<p>${transcriptionArray[transcriptCount]}</p>`

            countImage = ACTION_MOVE[e.target.className] === "NEXT" 
                ? countImage += 1 
                : countImage -= 1;

            if (ACTION_MOVE[e.target.className] === "NEXT" || ACTION_MOVE[e.target.className] === "PREV") {
                if (countImage >= 0 && countImage <= 3) {
                    const intervalMoveX = setInterval(() => {
                        coordsX = ACTION_MOVE[e.target.className] === "NEXT" 
                        ? coordsX -=2 
                        : coordsX += 2;
                    next.style.backgroundPositionX = `${coordsX}px`;
                    if (coordsX % 158 === 0) {
                        clearInterval(intervalMoveX);
                    }
                    }, 1)
    
                } else {
                    wrapper.style.maxWidth = `585px`
                    next.style.width = `145px`
                    line = ACTION_MOVE[e.target.className] === "NEXT"
                        ? line += 1
                        : line -=1;
                    coordsX = countImage > 3 ? 0 : -474;
                    countImage = countImage > 3 ? 0 : 3;
                    next.style.backgroundPositionX = `${coordsX}px`;
                        const intervalMoveY = setInterval(() => {
                            coordsY = ACTION_MOVE[e.target.className] === "NEXT" 
                                ? coordsY -=3 
                                : coordsY += 3;
                            next.style.backgroundPositionY = `${coordsY}px`
                            if (coordsY % 159 === 0) {
                                clearInterval(intervalMoveY);
                            }
                        }, 1)
                    
                    if (line > 3) {
                        countImage = -1;
                        next.style.backgroundPositionX = `${coordsX}px`;
                        wrapper.style.maxWidth = `850px`
                        const intervalShowLastImage = setInterval(() => {
                            lastImageWidth += 1;
                            next.style.width = `${lastImageWidth}px`
                            if (lastImageWidth % 619 === 0) {
                                clearInterval(intervalShowLastImage)
                            }
                        }, 1)
                        lastImageWidth = 0;
                    }
                }
            }
        }
    }
    document.addEventListener('mousedown', toStart)
    
    return(
        `<div class="comics__navigation">
            ${
                isNext 
                ? `<div class="prev-comics" id="next">
                        <i class="fa fa-angle-right fa-5x"></i>
                    </div>
                    <div class="prev-comics">
                        <i class="fa fa-angle-double-right fa-5x"></i>
                    </div>`
                :  `<div class="prev-comics">
                        <i class="fa fa-angle-double-left fa-5x"></i>
                    </div>
                    <div class="prev-comics">
                        <i class="fa fa-angle-left fa-5x"></i>
                    </div>`
            }
        </div>`
    ) 
}