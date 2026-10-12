import { useState } from "react";
import { profileImage } from "../../data/profileImage";

export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false);
  return (
    <figure className="portrait-studio">
      <div className="portrait-studio-image">
        {!failed ? (
          <img src={profileImage} alt="Jann Eirich Cipriano" width={1122} height={1402} fetchPriority="high" onError={() => setFailed(true)} />
        ) : (
          <span className="portrait-monogram" role="img" aria-label="Jann Cipriano monogram">jc.</span>
        )}
      </div>
      <figcaption>
        <strong>Jann Eirich N. Cipriano</strong>
        <span>Designer &amp; developer</span>
      </figcaption>
    </figure>
  );
}
