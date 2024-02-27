let coursesData = [
  {
    id: "music1",
    title: "Guitar Fundamentals",
    slug: "guitar_fundamentals",
    description:
      "Learn the basics of Playing guitar with our comprehensive beginner's course.",
    price: 77,
    instructor: "Michael Jackson",
    isFeatured: true,
    image: "/courses/guitar.jpg",
  },
  {
    id: "music2",
    title: "Piano Basics",
    slug: "piano_basics",
    description:
      "Master the fundamental techniques of playing the piano in this beginner's course.",
    price: 65,
    instructor: "Mozart",
    isFeatured: true,
    image: "/courses/piano.jpg",
  },
  {
    id: "music3",
    title: "Singing 101",
    slug: "singing_101",
    description:
      "Discover your voice and learn essential singing techniques with our introductory course.",
    price: 50,
    instructor: "Adele",
    isFeatured: false,
    image: "/courses/singing.jpg",
  },
  {
    id: "music4",
    title: "Bass Guitar Fundamentals",
    slug: "bass_guitar_fundamentals",
    description:
      "Start your journey into bass guitar playing with this comprehensive beginner's guide.",
    price: 80,
    instructor: "Flea",
    isFeatured: true,
    image: "/courses/bass_guitar.jpg",
  },
  {
    id: "music5",
    title: "Drumming Essentials",
    slug: "drumming_essentials",
    description:
      "Learn the basic rhythms and techniques of drumming in this beginner-friendly course.",
    price: 70,
    instructor: "Neil Peart",
    isFeatured: false,
    image: "/courses/drumming.jpg",
  },
  {
    id: "music6",
    title: "Music Theory Made Easy",
    slug: "music_theory_made_easy",
    description:
      "Demystify music theory concepts and enhance your musical understanding with this course.",
    price: 55,
    instructor: "Beethoven",
    isFeatured: true,
    image: "/courses/music_theory.jpg",
  },
  {
    id: "music7",
    title: "Songwriting Workshop",
    slug: "songwriting_workshop",
    description:
      "Unlock your creativity and learn the art of crafting compelling songs with this workshop.",
    price: 90,
    instructor: "Taylor Swift",
    isFeatured: true,
    image: "/courses/songwriting.jpg",
  },
  {
    id: "music8",
    title: "Violin for Beginners",
    slug: "violin_for_beginners",
    description:
      "Embark on your violin journey with this beginner's course designed to teach you the basics.",
    price: 75,
    instructor: "Itzhak Perlman",
    isFeatured: false,
    image: "/courses/violin.jpg",
  },
  {
    id: "music9",
    title: "Harmonica Mastery",
    slug: "harmonica_mastery",
    description:
      "Learn to play the harmonica like a pro with our step-by-step mastery course.",
    price: 60,
    instructor: "Bob Dylan",
    isFeatured: true,
    image: "/courses/harmonica.jpg",
  },
  {
    id: "music10",
    title: "Flute Basics",
    slug: "flute_basics",
    description:
      "Discover the enchanting world of the flute with this beginner's guide.",
    price: 55,
    instructor: "James Galway",
    isFeatured: false,
    image: "/courses/flute.jpg",
  },
  {
    id: "music11",
    title: "Ukulele Fundamentals",
    slug: "ukulele_fundamentals",
    description:
      "Begin your ukulele journey with this comprehensive beginner's course.",
    price: 45,
    instructor: "Jake Shimabukuro",
    isFeatured: true,
    image: "/courses/ukulele.jpg",
  },
];
type coursesDataType = typeof coursesData;

export default coursesData;
export type { coursesDataType };
