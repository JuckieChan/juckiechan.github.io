function createBackgroundBottom () {
    const forest = document.createElement("div");
    forest.className = "background-forest"
    const mountains = document.createElement("div");
    mountains.className = "background-mountains"
    const gradient = document.createElement("div");
    gradient.className = "background-bottom-gradient"
    document.body.prepend(mountains, forest, gradient)
}

createBackgroundBottom();