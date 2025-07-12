const carouselHandler = (function () {
    const leftArrow = document.querySelector(".left");
    const rightArrow = document.querySelector(".right");

    const carouselFilm = document.querySelector(".film");

    const carouselWidth = 500;
    let carouselFilmPosition = 0;
    let carouselPicture = 0;
    let numberOfImages = 5;

    const numbers = ["zero", "one", "two", "three", "four"];

    // Adds selected class to the corresponding circle and removes class from previous circle
    const changeSelected = function (previous, next) {
        const previousCircle = document.querySelector(`.${numbers[previous]}`);
        const nextCircle = document.querySelector(`.${numbers[next]}`);

        previousCircle.id = "";
        nextCircle.id = "active-circle";
    };

    // Moves to the picture on the right, it loops back to the left if needed
    const moveRight = function () {
        const previous = carouselPicture;
        carouselPicture = (carouselPicture + 1) % numberOfImages;
        const next = carouselPicture;
        carouselFilmPosition = carouselWidth * carouselPicture;
        carouselFilmPosition =
            carouselFilmPosition % (carouselWidth * numberOfImages);
        carouselFilm.style.right = `${carouselFilmPosition}px`;
        changeSelected(previous, next);
    };

    // Moves to the picture on the left, it loops back to the right if needed
    const moveLeft = function () {
        const previous = carouselPicture;
        if (carouselFilmPosition === 0) {
            carouselPicture = numberOfImages - 1;
        } else {
            carouselPicture--;
        }
        const next = carouselPicture;
        carouselFilmPosition = carouselWidth * carouselPicture;
        carouselFilm.style.right = `${carouselFilmPosition}px`;
        changeSelected(previous, next);
    };

    const changeToithPicture = function(i) {
        const previous = carouselPicture;
        carouselPicture = i;
        const next = carouselPicture;
        carouselFilmPosition = carouselWidth * carouselPicture;
        carouselFilm.style.right = `${carouselFilmPosition}px`;
        changeSelected(previous, next);
    }

    const makeArrows = function () {
        leftArrow.addEventListener("click", moveLeft);
        rightArrow.addEventListener("click", moveRight);
    };

    const makeCircles = function () {
        const circlesDiv = document.querySelector(".navigation-circles");
        for (let i = 0; i < numberOfImages; i++) {
            const ithCircle = document.createElement("button");
            ithCircle.classList.add(`${numbers[i]}`);
            circlesDiv.appendChild(ithCircle);
            ithCircle.addEventListener("click", () => {
                changeToithPicture(i);
            });
        }

        // We add the active class to the default selected
        document.querySelector(".zero").id = "active-circle";
    };

    return { makeArrows, makeCircles, moveRight };
})();

export { carouselHandler };
