import { Img } from "./Img"
import { splitTranscript } from "./helper"
import { Navigation } from "./Navigation"

export const Comics = (imgUrl, transcriptCount, transcript, ) => {
    const transcriptionArray = splitTranscript(transcript)
    setTimeout(() => {
        Img(imgUrl);
    }, 0)
    return (
        `<div class="comics__content" id="comics__content">
            ${Navigation(false, transcriptCount, transcriptionArray)}
            <div class="comics__image" id="comics__image">
                
            </div>
            ${Navigation(true, transcriptCount, transcriptionArray)}
        </div>`
    )

}

//<img src=${imgUrl} alt="images"/>