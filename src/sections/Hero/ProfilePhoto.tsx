import { useState } from "react";
import portrait from "../../assets/profile.jpg";

export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false);
  return (
    <figure className="portrait-studio">
      <div className="portrait-studio-image">
        {!failed ? (
          <img src={portrait} alt="Jann Eirich Cipriano" width={2048} height={1536} fetchPriority="high" onError={() => setFailed(true)} />
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