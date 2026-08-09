// =================================
// SPOOKYVERSE SEARCH + FILTER
// =================================

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.querySelector(".search-box input");
    const storyCards = document.querySelectorAll(".story-card");
    const filterButtons = document.querySelectorAll(".filter-btn");

    let currentCategory = "all";


    // =================================
    // READ CATEGORY FROM URL
    // =================================

    const urlParams = new URLSearchParams(window.location.search);
    const urlCategory = urlParams.get("category");

    if (urlCategory) {
        currentCategory = urlCategory;
    }


    // =================================
    // FILTER STORIES
    // =================================

    function filterStories() {

        const searchText = searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";

        storyCards.forEach(function (card) {

            const storyText = card.textContent.toLowerCase();
            const category = card.dataset.category;

            const matchesSearch =
                storyText.includes(searchText);

            const matchesCategory =
                currentCategory === "all" ||
                category === currentCategory;

            if (matchesSearch && matchesCategory) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });
    }


    // =================================
    // SET ACTIVE BUTTON FROM URL
    // =================================

    filterButtons.forEach(function (button) {

        button.classList.remove("active");

        if (button.dataset.filter === currentCategory) {
            button.classList.add("active");
        }

    });


    // =================================
    // SEARCH
    // =================================

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            filterStories();

        });

    }


    // =================================
    // CATEGORY BUTTONS
    // =================================

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });

            this.classList.add("active");

            currentCategory = this.dataset.filter;

            filterStories();

        });

    });


    // =================================
    // INITIAL FILTER
    // =================================

    filterStories();

});