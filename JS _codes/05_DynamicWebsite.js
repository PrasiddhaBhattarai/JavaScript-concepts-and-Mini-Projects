function createCard(title, channelName, views, monthsOld, duration, thumbnail) {
    let viewsNum = calculateViewsNum(views);
    let whenUploaded = calculateWhenUploaded(monthsOld);
    let html = `<div class="card">
        <div class="image">
          <img
            src=${thumbnail}
            alt=""
          />
          <p>${duration}</p>
        </div>
        <div class="text">
          <h3>${title}</h3>
          <p>${channelName} • ${viewsNum} views • ${whenUploaded}</p>
        </div>
      </div>`;
    let container = document.querySelector(".container");
    container.insertAdjacentHTML("beforeend", html);
}

// to calculate views in thousands, or millions. or billions
function calculateViewsNum(num) {
    // less than 1000 views
    if (10 ** 3 > num) {
        return num;
    }
    // less than a million views
    else if (10 ** 6 > num) {
        //.toFixed(1) -> upto 1 decimal and converts to string
        return `${(num / 10 ** 3).toFixed(1)}K`;
    }
    // less than a billion views
    else if (10 ** 9 > num) {
        return `${(num / 10 ** 6).toFixed(1)}M`;
    }
    // less than trillion views
    else {
        return `${(num / 10 ** 9).toFixed(1)}B`;
    }
}

// how long ago is the video uploaded
function calculateWhenUploaded(months) {
    // less than a year
    if (12 > months) {
        return `${months} months ago`;
    }
    // more than or equal to 1 year but less than 2
    else if (24 > months) {
        return `${Math.floor(months / 12)} year ago`;
    }
    // years
    else {
        return `${Math.floor(months / 12)} years ago`;
    }
}

createCard(
    "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
    "CodeWithHarry",
    3151000,
    14,
    "31:20",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard(
    "Your First HTML Website | Sigma Web Development Course - Tutorial #2",
    "CodeWithHarry",
    1200399,
    14,
    "28:30",
    "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCJ1LoyqdZFLpT7I8d4ATCDAg7rrw"
);
