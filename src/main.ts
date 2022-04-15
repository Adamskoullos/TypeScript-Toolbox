console.log("Firing !!!!!!!!!!!!!!");

class Song {
  constructor(public name: string, public duration: number) {}
}
class Playlist {
  constructor(public title: string, public songs: Song[]) {}
}

function isSong(item: any): item is Song {
  return item instanceof Song;
}

function getItemName(item: Song | Playlist): string {
  if (isSong(item)) {
    return item.name;
  }
  return item.title;
}
