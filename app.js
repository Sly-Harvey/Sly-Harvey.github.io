// Get all heading elements
var headings = document.querySelectorAll("h1, h2, h4, h5, h6");

for (var i = 0; i < headings.length; i++) {
  headings[i].style.fontFamily = "Georgia";
}

var linkElements = document.getElementsByTagName("a");
for (var i = 0; i < linkElements.length; i++) {

    linkElements[i].target = "_blank";

    if (linkElements[i].id == "github-link")
    {
        linkElements[i].href = "https://github.com/Sly-Harvey";
        console.log("github link has a valid url")
    }
    else if(linkElements[i].id == "youtube-link")
    {
        linkElements[i].href = "https://www.youtube.com/@Sly_Harvey";
        console.log("youtube link has a valid url")
    }
  }

// Get all paragraph elements
var paragraphs = document.getElementsByTagName("p");

// Change the font size of all paragraphs to 16px
for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.fontSize = "16px";
}
