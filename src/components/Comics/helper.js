import { MONTH } from "./ComicsConstants"

export const maskDate = (day, month, year) => {
    return `${day}.${MONTH[month]}.${year}`
}

export const splitTranscript = (transcript) => {
    return transcript.split('\n\n')
}
