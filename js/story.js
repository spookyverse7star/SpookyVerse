document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);
    const storyId = params.get("story") || "1";
    const story = stories[storyId];

    // If story doesn't exist, return to Stories page
    if (!story) {
        window.location.href = "stories.html";
        return;
    }

    // ===============================
    // STORY ELEMENTS
    // ===============================

    const title = document.getElementById("story-title");
    const category = document.getElementById("story-category");
    const cover = document.getElementById("story-cover");
    const date = document.getElementById("story-date");
    const time = document.getElementById("story-time");
    const content = document.getElementById("story-content");


    // ===============================
    // LOAD STORY CONTENT
    // ===============================

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


    // ===============================
    // SEO TITLE
    // ===============================

    document.title = story.title + " | SpookyVerse";


    // ===============================
    // SEO META DESCRIPTION
    // ===============================

    let metaDescription = document.querySelector(
        'meta[name="description"]'
    );

    if (!metaDescription) {

        metaDescription = document.createElement("meta");

        metaDescription.name = "description";

        document.head.appendChild(metaDescription);
    }

    metaDescription.content =
        story.title +
        " - पढ़ें SpookyVerse पर डरावनी हिंदी हॉरर कहानी। " +
        "Ghost stories, paranormal encounters और terrifying horror stories।";


    // ===============================
    // CANONICAL URL
    // ===============================

    let canonical = document.querySelector(
        'link[rel="canonical"]'
    );

    if (!canonical) {

        canonical = document.createElement("link");

        canonical.rel = "canonical";

        document.head.appendChild(canonical);
    }

    canonical.href =
        window.location.origin +
        window.location.pathname +
        "?story=" +
        storyId;


    // ===============================
    // OPEN GRAPH TITLE
    // ===============================

    let ogTitle = document.querySelector(
        'meta[property="og:title"]'
    );

    if (!ogTitle) {

        ogTitle = document.createElement("meta");

        ogTitle.setAttribute("property", "og:title");

        document.head.appendChild(ogTitle);
    }

    ogTitle.content = story.title + " | SpookyVerse";


    // ===============================
    // OPEN GRAPH DESCRIPTION
    // ===============================

    let ogDescription = document.querySelector(
        'meta[property="og:description"]'
    );

    if (!ogDescription) {

        ogDescription = document.createElement("meta");

        ogDescription.setAttribute(
            "property",
            "og:description"
        );

        document.head.appendChild(ogDescription);
    }

    ogDescription.content =
        "पढ़ें " +
        story.title +
        " - SpookyVerse की डरावनी हिंदी हॉरर कहानी।";


    // ===============================
    // OPEN GRAPH IMAGE
    // ===============================

    let ogImage = document.querySelector(
        'meta[property="og:image"]'
    );

    if (!ogImage) {

        ogImage = document.createElement("meta");

        ogImage.setAttribute(
            "property",
            "og:image"
        );

        document.head.appendChild(ogImage);
    }

    ogImage.content =
        new URL(story.image, window.location.href).href;

});
