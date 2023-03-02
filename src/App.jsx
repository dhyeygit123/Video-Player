import { useState , useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import videojs from 'video.js';

function App() {
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const videoPlayerRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const articleHeight = document.getElementById("p4").offsetTop;
      const halfViewportHeight = window.innerHeight * 0.95;

      if (scrollPosition + halfViewportHeight >= articleHeight) {
        setShowVideoPlayer(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showVideoPlayer) {
      const videoPlayer = videojs(videoPlayerRef.current);
      // videoPlayer.play();
    }
  }, [showVideoPlayer]);
  return (
    <div className="App">
      <div className="display-6">
     <p id="p1">
     Pictures descended on Austin with one of that studio’s blue-ribbon, A-team moviemaking armies: Blythe Danner, Anthony Perkins, Beau Bridges, a hot director named Sidney Lumet, an ingenue named Susan Sarandon, and the same producer who had already made small-town Texas a bankable commodity with the adaptation of Larry McMurtry’s The Last Picture Show. The prestige project settled in at the Chariot Inn, where Danner had a permanent sign on her door—“Quiet! Mother and Baby Sleeping”—to protect the weeks-old Gwyneth Paltrow. And each day a wagon train of private Winnebagos, Cinemobiles, catering trucks, and Greyhound buses would fan out around Bastrop for the filming of yet another McMurtry novel, Leaving Cheyenne.
     </p>
     <p id="p2">
     On a certain day, the production broke for lunch, and the movie’s proud papa, producer Steve Friedman, noticed a scruffy, long-haired hippie making his way through the food line. Friedman walked over and blocked his way. “Do you work on the movie?” he demanded.

The interloper held a plastic plate with two barbecued chicken wings on it. “Uh, no.”

“Then put the chicken back.”

The disheveled guy meekly took the chicken wings back to the catering truck. In 1974 Columbia released Lovin’ Molly, as the picture came to be called, to universal critical yawns, caused in part by its almost-three-hour running time. “If I were forced to settle on one word to describe Lovin’ Molly,” wrote McMurtry at the time, “ ‘casual’ might be the word—though ‘indifferent’ would run it an excellent race. . . . Certainly [Lumet’s] indifference to locale was so total that one is sorry he was put to the anguish of uprooting himself from home and hearth for even the few short weeks he could bring himself to stay in Texas.” 
     </p>
     {showVideoPlayer && (
          <div className="video-player-container">
            <video
              id="my-video"
              className="video-js"
              controls
              preload="auto"
              width="640"
              height="264"
              data-setup="{}"
              ref={videoPlayerRef}
              autoPlay
            >
              <source
                src="https://storage.googleapis.com/interactive-media-ads/media/android.mp4"
                type="video/mp4"
              />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                <a href="https://videojs.com/html5-video-support/" target="_blank" rel="noopener noreferrer">supports HTML5 video</a>
              </p>
            </video>
          </div>
     )}
     <p id="p3">
     And the chicken-stealing hippie? He ambled back to Austin and, even before Lovin’ Molly was released, completed the most financially successful film in the history of Texas, a film that is still shown in almost every country of the world and whose innovations have continued to influence the horror genre for the past thirty years. Using $60,000 raised by an Austin politician, he filmed mostly in and around an old Victorian house in Round Rock with a crew that used exactly two vehicles—a Chevy van for the film equipment and a broken-down 1964 Dodge Travco motor home for the actors’ dressing rooms. The result was The Texas Chainsaw Massacre, a film whose very title has become America’s cultural shorthand for perversity, moral decline, and especially the corruption of children. 
     </p>
     <p id="p4">
     Yet the movie’s pure intensity, startling technique, and reputation as an outlaw film have brought praise from a group as diverse as Steven Spielberg, the Cannes Film Festival, Martin Scorsese (Travis Bickle watches it in Taxi Driver), the Museum of Modern Art in New York, almost every metal band of the past twenty years, and the Colombo crime family of Brooklyn, which gleefully ranked it right up there with Deep Throat as one of its major sources of income in the seventies.

Chainsaw was the first real “slasher” film, and it changed many things—the ratings code of the Motion Picture Association of America, the national debate on violence, the Texas Film Commission, the horror genre—but it remained a curiously isolated phenomenon. The film itself, involving five young people on a twisted drive through the country, is a strange, shifting experience—early audiences were horrified; later audiences laughed; newcomers to the movie were inevitably stricken with a vaguely uneasy feeling, as though the movie might have actually been made by a maniac—but the story behind the film is even stranger.
     </p>
     </div>
     </div>
  )
}

export default App
