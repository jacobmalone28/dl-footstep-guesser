export type hero = {
  id: number;
  name: string;
  audioURL: string;
  image?: string;
};

export const heroes: hero[] = [
  { id: 6, name: "Abrams", audioURL: "Abrams.mp3", image: "Abrams.png" },
  { id: 15, name: "Bebop", audioURL: "Bebop.mp3", image: "Bebop.png" },
  { id: 11, name: "Dynamo", audioURL: "Dynamo.mp3", image: "Dynamo.png" },
  {
    id: 17,
    name: "Grey Talon",
    audioURL: "GreyTalon.mp3",
    image: "GreyTalon.png",
  },
  { id: 13, name: "Haze", audioURL: "Haze.mp3", image: "Haze.png" },
  { id: 1, name: "Infernus", audioURL: "Infernus.mp3", image: "Infernus.png" },
  { id: 20, name: "Ivy", audioURL: "Ivy.mp3", image: "Ivy.png" },
  { id: 12, name: "Kelvin", audioURL: "Kelvin.mp3", image: "Kelvin.png" },
  {
    id: 4,
    name: "Lady Geist",
    audioURL: "LadyGeist.mp3",
    image: "LadyGeist.png",
  },
  { id: 31, name: "Lash", audioURL: "Lash.mp3", image: "Lash.png" },
  { id: 8, name: "McGinnis", audioURL: "McGinnis.mp3", image: "McGinnis.png" },
  { id: 52, name: "Mirage", audioURL: "Mirage.mp3", image: "Mirage.png" },
  { id: 18, name: "Mo & Krill", audioURL: "MoKrill.mp3", image: "MoKrill.png" },
  { id: 10, name: "Paradox", audioURL: "Paradox.mp3", image: "Paradox.png" },
  { id: 50, name: "Pocket", audioURL: "Pocket.mp3", image: "Pocket.png" },
  { id: 2, name: "Seven", audioURL: "Seven.mp3", image: "Seven.png" },
  { id: 19, name: "Shiv", audioURL: "Shiv.mp3", image: "Shiv.png" },
  { id: 3, name: "Vindicta", audioURL: "Vindicta.mp3", image: "Vindicta.png" },
  { id: 35, name: "Viscous", audioURL: "Viscous.mp3", image: "Viscous.png" },
  { id: 25, name: "Warden", audioURL: "Warden.mp3", image: "Warden.png" },
  { id: 7, name: "Wraith", audioURL: "Wraith.mp3", image: "Wraith.png" },
  { id: 27, name: "Yamato", audioURL: "Yamato.mp3", image: "Yamato.png" },
];
