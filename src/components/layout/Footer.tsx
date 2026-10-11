import { ArrowUp } from "lucide-react";
import { SocialLinks } from "../common/SocialLinks";
export default function Footer() {
  return (
    <footer className="container footer">
      <div>
        <a className="logo" href="#home">
          JANN<span>.</span>
        </a>
        <p>Designed & Developed by Jann Eirich Cipriano</p>
      </div>
      <div className="footer-right">
        <SocialLinks />
        <a className="back-top" href="#home">
          Back to top <ArrowUp size={15} />
        </a>
        <small>© 2026 Jann Eirich Cipriano. All rights reserved.</small>
      </div>
    </footer>
  );
}
