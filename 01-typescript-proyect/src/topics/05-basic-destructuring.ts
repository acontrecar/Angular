interface AudioPlayer {
  volume: number;
  second: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  volume: 90,
  second: 36,
  song: "Carlona",
  details: {
    author: "Antonio",
    year: 2002,
  },
};

// const { song: anotherSong, second: songDuration, details } = audioPlayer;

// const { author } = details;

// console.log("Song: ", anotherSong);
// console.log("Duration: ", songDuration);

const [p1, p2, p3] = ["Antonio", "Maria", "Juan"];

export {};
