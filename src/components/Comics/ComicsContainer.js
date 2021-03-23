import { Comics } from './Comics'
import { getComicsInformationAPI } from './ComicsAPI';
import {Title} from './Title'
import {maskDate} from './helper'

export const ComicsContainer = () => {
    let transcriptCount = 0;

    //const a = getComicsInformationAPI("http://xkcd.com/614/info.0.json").then(res =>res)
    const getComicsInformation = async () => {
        try {
            const response = await getComicsInformationAPI("http://xkcd.com/614/info.0.json");
            const info = await response.json();
            return info
        }
        catch (e) {
            console.log(e)
        }
    }
    
    return getComicsInformation().then(res => {
        const date = maskDate(res.day, res.month, res.year)
        return (
            `<div id="comics" class="comics">
                ${Title(res.title, date)}
                ${Comics(res.img, transcriptCount, res.transcript)}
            </div>`
        )
    })
}