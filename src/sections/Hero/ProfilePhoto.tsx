import { useState } from "react";
import { ArrowUpRight, Hand, X } from "lucide-react";
import { profileImage } from "../../data/profileImage";

export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false);
  const [greeting, setGreeting] = useState(false);
  const [mono, setMono] = useState(false);
  return (
    <figure className="portrait-studio">
      <div className="portrait-studio-label"><span>A LITTLE ABOUT ME</span><span aria-hidden="true">✳</span></div>
      <div className={`portrait-studio-image ${mono ? "is-mono" : ""}`}>
        {!failed ? <img src={profileImage} alt="Jann Eirich Cipriano" width={1122} height={1402} fetchPriority="high" onError={() => setFailed(true)} /> : <span className="portrait-monogram" role="img" aria-label="Jann Cipriano monogram">jc.</span>}
        <span className="portrait-location">MANILA, PH</span>
      </div>
      <div className="portrait-tones" role="group" aria-label="Portrait appearance">
        <button aria-pressed={!mono} onClick={() => setMono(false)}>Color</button>
        <button aria-pressed={mono} onClick={() => setMono(true)}>Monochrome</button>
      </div>
      <figcaption><strong>Jann Eirich N. Cipriano</strong><span>Designer &amp; developer</span></figcaption>
      <button className="studio-hello" aria-label={greeting ? "Close greeting" : "Say hello to Jann"} aria-expanded={greeting} aria-controls="portrait-greeting" onClick={() => setGreeting(!greeting)}>
        {greeting ? <X size={18} /> : <Hand size={18} />} {greeting ? "Close greeting" : "Say hello"}<ArrowUpRight size={17} />
      </button>
      <div id="portrait-greeting" className="studio-greeting" hidden={!greeting}>
        <p>Hey, thanks for stopping by! Have an idea in mind?</p>
        <a href="#contact" onClick={() => setGreeting(false)}>Let’s talk <ArrowUpRight size={16} /></a>
      </div>
    </figure>
  );
}