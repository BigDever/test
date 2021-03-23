export const getComicsInformationAPI = async (url) => {
    const result = await fetch(url)
    return result
}