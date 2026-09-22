let getName = document.getElementById("showtime")

const showName = (name) => {
    return `Mijn naam is" + ${name}`
}

getName.textContent = showName("Jason")