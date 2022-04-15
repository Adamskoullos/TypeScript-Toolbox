"use strict";
console.log("Firing !!!!!!!!!!!!!!");
class Song {
    constructor(name, duration) {
        this.name = name;
        this.duration = duration;
    }
}
class Playlist {
    constructor(title, songs) {
        this.title = title;
        this.songs = songs;
    }
}
function isSong(item) {
    return item instanceof Song;
}
function getItemName(item) {
    if (isSong(item)) {
        return item.name;
    }
    return item.title;
}
