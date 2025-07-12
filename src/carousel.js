const carouselHandler = (function () {
    const leftArrow = document.querySelector(".left");
    const rightArrow = document.querySelector(".right");

    const carouselFilm = document.querySelector(".film");

    const carouselWidth = 500;
    let carouselFilmPosition = 0;
    let numberOfImages = 5;

    // Moves to the picture on the right, it loops back to the left if needed
    const moveRight = function () {
        carouselFilmPosition +=
            carouselWidth % (carouselWidth * numberOfImages);
        carouselFilmPosition = carouselFilmPosition % (carouselWidth * numberOfImages);
        carouselFilm.style.right = `${carouselFilmPosition}px`;
    };

    // Moves to the picture on the left, it loops back to the right if needed
    const moveLeft = function () {
        if (carouselFilmPosition === 0) {
            carouselFilmPosition = carouselWidth * (numberOfImages - 1);
            carouselFilm.style.right = `${carouselFilmPosition}px`;
        } else {
            carouselFilmPosition -= carouselWidth;
            carouselFilm.style.right = `${carouselFilmPosition}px`;
        }
    };

    const makeArrows = function() {
        leftArrow.addEventListener("click", moveLeft);
        rightArrow.addEventListener("click", moveRight);
    }

    const makeCircles = function() {
        const circlesDiv = document.querySelector(".navigation-circles");
        for(let i = 0; i < numberOfImages; i++) {
            const ithCircle = document.createElement("button");
            ithCircle.classList.add(`${i}`);
            circlesDiv.appendChild(ithCircle);
        }
    }

    return { makeArrows, makeCircles };
})();

export { carouselHandler };
