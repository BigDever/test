export const Title = (title, date) => {
    return (
        `<div class="comics__header">
            <div class="comics__title">
                <h1>${title}</h1>
            </div>
            <div class="comics__date">
                <span class="comics__date-text">${date}</span>
            </div>
        </div>`
    )
}