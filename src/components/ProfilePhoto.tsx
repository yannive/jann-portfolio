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
            aria-label="Profile photo placeholder for Jann Eirich Cipriano"
          >
            <span aria-hidden="true">jc.</span>
            <small aria-hidden="true">PROFILE PHOTO</small>
          </div>
        )}
      </div>
      <p className="hero-photo-caption">
        Jann Eirich N. Cipriano<span>DESIGNER & DEVELOPER</span>
      </p>
    </div>
  );
}
