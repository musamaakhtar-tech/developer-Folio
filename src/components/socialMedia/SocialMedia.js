import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-gitlab"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-x-twitter"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-stack-overflow"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.kaggle ? (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-kaggle"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.dev ? (
        <a
          href={socialMediaLinks.dev}
          className="icon-button dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-dev"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.tiktok ? (
        <a
          href={socialMediaLinks.tiktok}
          className="icon-button tiktok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-tiktok"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.snapchat ? (
        <a
          href={socialMediaLinks.snapchat}
          className="icon-button snapchat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-snapchat"></i>
          <span></span>
        </a>
      ) : null} 

      {socialMediaLinks.youtube ? (
        <a
          href={socialMediaLinks.youtube}
          className="icon-button youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-youtube"></i>
          <span></span>
        </a>
      ) : null} 

      {socialMediaLinks.whatsapp ? (
        <a
          href={socialMediaLinks.whatsapp}
          className="icon-button whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i>
          <span></span>
        </a>
      ) : null} 

      {socialMediaLinks.telegram ? (
        <a
          href={socialMediaLinks.telegram}
          className="icon-button telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-telegram"></i>
          <span></span>
        </a>
      ) : null} 

      {socialMediaLinks.threads ? (
        <a
          href={socialMediaLinks.threads}
          className="icon-button threads"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-threads"></i>
          <span></span>
        </a>
      ) : null} 

      {socialMediaLinks.pinterest ? (
        <a
          href={socialMediaLinks.pinterest}
          className="icon-button pinterest"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-pinterest"></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
