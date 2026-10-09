import { useState } from "react";
import { profileImage } from "../data/profileImage";

export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="hero-photo-wrap">
      <div className="hero-photo">
        {profileImage && !failed ? (
          <img
            src={profileImage}
            alt="Jann Eirich Cipriano"
            width={480}
            height={540}
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
      <p className="hero-photo-caption">
        Jann Eirich N. Cipriano<span>DESIGNER & DEVELOPER</span>
      </p>
    </div>
  );
}
