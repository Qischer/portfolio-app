import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Socials() {
  return (
    <div className="mt-5">
      <a
        href="https://www.linkedin.com/in/khainguy/"
        className="m-5 text-orange-200"
      >
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>
      <a href="https://github.com/Qischer" className="m-5 text-orange-200">
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      </a>
      <a href="https://twitter.com/itsKhai_" className="m-5 text-orange-200">
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
      </a>
    </div>
  );
}
