// nested async function
// this code won't run

// prefer 08_4_AsyncAwait.jpeg to understand the problem

async function getSongs() {
    let a = await fetch("/albums/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    Array.from(anchors).forEach(async e => {
        console.log("anchors");
        if (e.href.includes("/albums/")) {
            let album = e.href.split("/").slice(-1)[0];
            let songs = [];

            let fetchSongs = await fetch(`${e.href}/`);
            let res = await fetchSongs.text();
            let div2 = document.createElement("div");
            div2.innerHTML = res;
            let anchors2 = div2.getElementsByTagName("a");
            let id = 0;

            // async inside async
            Array.from(anchors2).forEach(async e => {
                console.log("anchors2");
                if (e.href.endsWith(".mp3")) {
                    // console.log(e.href);
                    let songName = e.href.split("/").pop().split(".").shift().replace(/%20/g, " ");
                    let song = new Song(++id, e.href, `https://i.scdn.co/image/ab67616d00001e0273c6514b296e0b53dc7b75b3`, songName, `The Local Train`);
                    songs.push(song);
                }
            });

            // let json = await fetch(`${e.href}//info.json`)
            // same below and above
            let json = await fetch(`/albums/${album}/info.json`)
            let response = await json.json();

            let img = await fetch(`/albums/${album}/album%20cover.jpeg`);

            allAlbums[response.title] = songs;
            createAlbum(response, img.url, songs);
        }
    });
}

async function main() {

    console.log("hello");

    await getSongs();

    console.log("hi");

    console.log(allAlbums); // shows result
    console.log(allAbbums[anyKey]); // shows undefined
}

//order of execution

//hello
//anchors
//hi
//allAlbums{...}
//undefined
//anchors2

// what's the problem

// It looks like you're dealing with nested async functions inside a loop and encountering an issue where allAlbums is not fully populated when you log it in the main function. Specifically, console.log(allAlbums) shows the result, but console.log(allAlbums[anyKey]) returns undefined.

// The issue here is related to asynchronous execution. In your code, the getSongs() function makes asynchronous calls (e.g., fetch(), await fetchSongs.text(), etc.), and the iteration over the anchors2 array is also asynchronous, as you're using await inside the forEach. This can lead to timing issues where the main() function reaches console.log(allAlbums) before all the asynchronous operations inside getSongs have completed.

// The use of forEach: The forEach method doesn't work well with async/await because it doesn't wait for asynchronous code inside the callback to complete before moving to the next iteration. This means that the forEach loop will continue executing the next iteration immediately, without waiting for the asynchronous calls to finish, and the control flow doesn’t pause as you might expect.

// Here's what's happening:

// (*) The getSongs() function initiates all the asynchronous operations, but because you're using await inside a forEach, the loop does not wait for all promises to resolve before moving on to the next line of code (e.g., allAlbums[response.title] = songs).

// (*) As a result, when main() logs allAlbums, the promise chains inside getSongs() may not have been resolved yet, causing incomplete or undefined data.


// Solution
// Use Promise.all to ensure all async operations are completed
// You can modify the forEach inside getSongs to use map and Promise.all to ensure that all the async operations within the loop are completed before you proceed with assigning allAlbums[response.title] = songs. This will wait for all promises to resolve and make sure the album data is fully populated before you log it in main().

async function getSongs() {
    let a = await fetch("/albums/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    
    // Use map and Promise.all to wait for all inner fetch calls to complete
    await Promise.all(Array.from(anchors).map(async e => {
        console.log("anchors");
        if (e.href.includes("/albums/")) {
            let album = e.href.split("/").slice(-1)[0];
            let songs = [];

            let fetchSongs = await fetch(`${e.href}/`);
            let res = await fetchSongs.text();
            let div2 = document.createElement("div");
            div2.innerHTML = res;
            let anchors2 = div2.getElementsByTagName("a");
            let id = 0;

            // Async inside async, use map here as well
            await Promise.all(Array.from(anchors2).map(async e => {
                console.log("anchors2");
                if (e.href.endsWith(".mp3")) {
                    let songName = e.href.split("/").pop().split(".").shift().replace(/%20/g, " ");
                    let song = new Song(++id, e.href, `https://i.scdn.co/image/ab67616d00001e0273c6514b296e0b53dc7b75b3`, songName, `The Local Train`);
                    songs.push(song);
                }
            }));

            // Fetch album info and cover after songs
            let json = await fetch(`/albums/${album}/info.json`);
            let response = await json.json();

            let img = await fetch(`/albums/${album}/album%20cover.jpeg`);

            allAlbums[response.title] = songs;
            createAlbum(response, img.url, songs);
        }
    }));
}

async function main() {
    console.log("hello");

    await getSongs();  // Ensure this completes before continuing

    console.log("hi");

    console.log(allAlbums); // Now should show the result after all async operations are complete
    console.log(allAlbums[anyKey]); // Now should show the album data if anyKey is valid
}
