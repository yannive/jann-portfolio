import { useState } from "react";
import { profileImage } from "../../data/profileImage";
import { Hand, X } from "lucide-react";

export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false);
  const [greeting, setGreeting] = useState(false);
  return (
    <figure className="hero-photo-wrap">
      <div className="hero-photo">
        {profileImage && !failed ? (
          <img
            src={profileImage}
            alt="Jann Eirich Cipriano"
            width={1122}
            height={1402}
            className="object-cover"
            fetchPriority="high"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className="hero-photo-placeholder"
            role="img"
            aria-label="JC monogram, designer and developer"
          >
            <div className="identity-top" aria-hidden="true"><span>DESIGN &times; DEVELOPMENT</span><span>&#10035;</span></div><span aria-hidden="true">jc.</span>
            <small aria-hidden="true">A GOOD IDEA DESERVES<br />A GREAT INTERFACE.</small><div className="identity-bottom" aria-hidden="true"><span>BASED IN MANILA</span><span>CREATING WITH INTENT &#8599;</span></div>
          </div>
        )}
      </div>
      <figcaption className="hero-photo-caption">
        Jann Eirich N. Cipriano<span>DESIGNER & DEVELOPER</span>
      </figcaption>
      <button
        className="portrait-wave"
        aria-label={greeting ? "Close greeting" : "Say hello to Jann"}
        aria-expanded={greeting}
        aria-controls="portrait-greeting"
        onClick={() => setGreeting(!greeting)}
      >
        {greeting ? <X size={19} /> : <Hand size={19} />}
        {greeting ? "See you around!" : "Say hello"}
      </button>
      <div id="portrait-greeting" className="portrait-greeting" hidden={!greeting}>
        <p>Hey, thanks for stopping by! Have an idea in mind?</p>
        <a href="#contact" onClick={() => setGreeting(false)}>Let’s talk <span aria-hidden="true">↗</span></a>
      </div>
    </figure>
  );
}
