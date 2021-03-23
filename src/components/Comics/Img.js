export const Img = (imgUrl) => {
    const img = document.getElementById("comics__image")
    img.style.backgroundImage = `url(${imgUrl})`
}