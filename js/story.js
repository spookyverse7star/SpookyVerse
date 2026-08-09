document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);

    const storyId = params.get("story") || "1";

    const story = stories[storyId];

    if (!story) {
        window.location.href = "stories.html";
        return;
    }


    const title = document.getElementById("story-title");
    const category = document.getElementById("story-category");
    const cover = document.getElementById("story-cover");
    const date = document.getElementById("story-date");
    const time = document.getElementById("story-time");
    const content = document.getElementById("story-content");


    if (title) {
        title.textContent = story.title;
    }

    if (category) {
        category.textContent = story.category;
    }

    if (cover) {
        cover.src = story.image;
        cover.alt = story.title;
    }

    if (date) {
        date.textContent = story.date;
    }

    if (time) {
        time.textContent = story.time;
    }

    if (content) {
        content.innerHTML = story.content;
    }


    document.title = story.title + " | SpookyVerse";

});