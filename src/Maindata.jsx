import React from "react";
import "./maindata.css";

const Maindata = () => {
  const lines = [
    "Wander often, wonder always",
    "Serenity in simplicity",
    "Every picture tells a story",
    "Lost in the beauty around me",
    "Moments like these are treasures",
    "Finding beauty in the ordinary",
    "A glimpse of paradise",
    "Let the adventure begin!",
    "Nature never goes out of style",
    "Life is a collection of moments",
    "Breathe in the beauty",
    "Every day is a new canvas",
    "Nature is beautiful",
    "Moments to cherish",
    "Wander and explore",
    "Simply breathtaking views",
    "Life is an adventure",
    "Find your bliss",
    "Chase your dreams",
    "Moments of joy",
    "Breathe and relax",
    "Serenity in nature",
    "Create your own path",
    "Explore the unknown",
    "Capture the moment",
    "Adventure awaits you",
    "Beauty all around",
    "Live in the moment",
    "Nature inspires us",
    "Find your peace",
    "Life's little wonders",
    "A view to love",
    "Nature is beautiful",
    "Moments to cherish",
    "Life is an adventure",
    "Find your bliss",
    "Chase your dreams",
    "Moments of joy",
    "Breathe and relax",
    "Serenity in nature",
    "Create your own path",
    "Explore the unknown",
    "Capture the moment",
    "Adventure awaits you",
    "Beauty all around",
    "Live in the moment",
    "Life's little wonders",
    "A view to love",
    "Dream big, live well",
    "Inhale confidence, exhale doubt",
    "Time for adventure",
    "Peace in the chaos",
    "Explore more, worry less",
    "Moments that matter",
    "Capture the essence",
    "Beauty in simplicity",
    "Find joy in small things",
    "Every moment counts",
    "Journey over destination",
    "Create your happiness",
    "Magic is everywhere",
    "Live your dreams",
    "Find your spark",
    "Keep exploring life",
    "Enjoy the ride",
    "Simplicity is key",
    "Discover the magic",
    "Journey through life",
    "Find your rhythm",
    "Moments of bliss",
    "Cherish every moment",
    "Stay wild and free",
    "Seek new horizons",
    "Live, laugh, love",
    "Unwind and refresh",
    "Explore the possibilities",
    "Adventure is out there",
    "Moments to remember",
    "Awaken your spirit",
    "Let your light shine",
    "Nature's calming embrace",
    "Inspiration is everywhere",
    "Dreams become reality",
    "Live in wonder",
    "Chase the sun",
    "Create your adventure",
    "Find beauty within",
    "Endless possibilities await",
    "Explore your surroundings",
    "Create lasting memories",
    "Discover your passion",
    "Enjoy the journey",
    "Embrace the unexpected",
    "Moments of serenity",
    "Create your own path",
    "Life is beautiful",
    "Always seek adventure",
    "Life’s simple pleasures",
    "Chase the stars",
    "Be fearless in life",
    "Find joy daily",
    "Unlock your potential",
    "Enjoy the little things",
    "Life is a journey",
  ];

  const rand = Math.floor(Math.random() * lines.length);
  let randLine = lines[rand];

  const pp = [
    "https://art.pixilart.com/a9490753c56419d.png",
    "https://d22e6o9mp4t2lx.cloudfront.net/cms/pfp2_11cfcec183.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWDgpiYYWazfOvaIl9cxqNZrva6XMYr3RWQ&s",
    "https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg",
    "https://avatars.githubusercontent.com/u/5821883?v=4",
    "https://miro.medium.com/v2/resize:fit:1200/1*LpgO8FuHE2dEek45Vn-DQg.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMx_NNrQYbtBiEihotQLvldxs3hcNouDKEmQ&s",
    "https://media.gq-magazine.co.uk/photos/6362687ed85a7b93f28a0904/3:2/w_1011,h_674,c_limit/Sigma-grindset-patrick-bateman.jpeg",
    "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRloUJSjQjx3no5KwjY3pqtM5N8AYmYXS2g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Hxsm257QeCSzTvHTssPryfXayrZLd7yXeg&s",
    "https://i.pinimg.com/564x/3c/1c/73/3c1c7364ed3445e25235b032ebc1dfe5.jpg",
    "https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp",
    "https://media.istockphoto.com/id/491783647/photo/asian-beauty.jpg?s=612x612&w=0&k=20&c=RauwXQ-fB5L7VWjEPxPX_jSNbJZmJ9SkQkJViLNgVNk=",
    "https://wallpapers.com/images/featured/cute-profile-picture-s52z1uggme5sj92d.jpg",
    "https://photosking.net/wp-content/uploads/2024/04/hide-face-girl-pic_93.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQvrbCXUD9K97pQwxER1xa2m82uiCxElhDzA&s",
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ];

  const pprand = Math.floor(Math.random() * pp.length);
  let randpp = pp[pprand];

  const randomNames = [
    "Aiko", // Japanese
    "Luca", // Italian
    "Sofia", // Spanish
    "Yara", // Arabic
    "Kiran", // Hindi
    "Omar", // Arabic
    "Anya", // Russian
    "Liam", // English
    "Saoirse", // Irish
    "Mateo", // Spanish
    "Amina", // Arabic
    "Tenzin", // Tibetan
    "Ilaria", // Italian
    "Ravi", // Hindi
    "Nia", // Swahili
    "Zara", // Arabic
    "Kai", // Hawaiian
    "Dmitry", // Russian
    "Mila", // Slavic
    "Khalil", // Arabic
    "Emilia", // Latin
    "Luka", // Slavic
    "Fiona", // Scottish
    "Avery", // English
    "Santiago", // Spanish
    "Jin", // Korean
    "Leila", // Persian
    "Hans", // German
    "Isla", // Scottish
    "Akira", // Japanese
    "Rafa", // Spanish
    "Soraya", // Persian
    "Nikolai", // Russian
    "Amara", // Igbo
    "Niko", // Greek
    "Freya", // Norse
    "Emre", // Turkish
    "Yuki", // Japanese
    "Carmen", // Spanish
    "Theo", // Greek
    "Jaya", // Hindi
    "Sven", // Scandinavian
    "Yara", // Arabic
    "Zuri", // Swahili
    "Pablo", // Spanish
    "Lila", // Arabic
    "Rashid", // Arabic
    "Marek", // Polish
    "Aisling", // Irish
    "Silly Goose", // Funny
    "Fuzzy Wuzzy", // Funny
    "Cupcake", // Cute
    "Snickerdoodle", // Cute
    "Bumblebee", // Cute
    "Binky", // Cute
    "Noodle", // Funny
    "Giggly Puff", // Funny
    "Pudding Pop", // Cute
    "Sassy Pants", // Funny
    "Twinkle Toes", // Cute
    "Doodlebug", // Cute
    "Wiggly Worm", // Funny
    "Sugarplum", // Cute
    "Cheeky Monkey", // Funny
  ];
  const randomWidth = Math.floor(Math.random() * 200) + 400;
  const randomHeight = Math.floor(Math.random() * 200) + 700;
  const imageUrl = `https://picsum.photos/${randomWidth}/${randomHeight}`;

  const pprandname = Math.floor(Math.random() * randomNames.length);
  let randppname = randomNames[pprandname];

  const num = Math.floor(Math.random() * 11);

  if (num === 5 || num === 9 || num === 3) {
    return (
      <>
        <div className="box">
          <img src={imageUrl} alt="image" className="images" />
        </div>
      </>
    );
   } 
  else if (num === 6 || num === 10) {
    return (
      <>
        <div className="box">
          <img src={imageUrl} alt="image" className="images" />
          <p>{randLine}</p>
          <div className="imgProDiv">
            <img src={randpp} alt="pp" className="imgPro" />
            <p className="proname">{randppname}</p>
          </div>
        </div>
      </>
    );
  }
   else {
    return (
      <>
        <div className="box">
          <img src={imageUrl} alt="image" className="images" />
          <p>{randLine}</p>
        </div>
      </>
    );
  }
};
export default Maindata;
