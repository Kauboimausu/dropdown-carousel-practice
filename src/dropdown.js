// Receives 2 class names, actionable is collapser button, toggable is the expandable class
// Additionally it receives a value which decides if it is actioned by clicking or hovering, it is clickable by default
const makeCollapsable = function(actionable, toggable) {
    const actionableElement = document.querySelector(`.${actionable}`);
    const toggableElement = document.querySelector(`.${toggable}`);
    actionableElement.addEventListener("click", (e) => {
        // For general purposes we'll stop event propagation
        e.stopPropagation();
        if(toggableElement.classList.contains("expandable")) {
            toggableElement.classList.remove("expandable");
            toggableElement.classList.add("expanded");
        } else {
            toggableElement.classList.remove("expanded");
            toggableElement.classList.add("expandable");
        }
    });
    
}

export { makeCollapsable }; 