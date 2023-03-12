import { Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useRef, useEffect, MutableRefObject } from "react";

function ContactDetails() {
  const linkRef: MutableRefObject<HTMLAnchorElement | undefined> = useRef();

  useEffect(() => {
    if (linkRef && linkRef.current) {
      linkRef!.current!.href = atob(
        "bWFpbHRvOmFiaGlzaGVrY2hhZGhhMjM1QGdtYWlsLmNvbQ=="
      );
    }
  }, [linkRef, linkRef.current]);

  const details = [
    {
      icon: <LinkedInIcon />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhishek-chadha-53b09364/",
    },
    {
      icon: <GitHubIcon />,
      name: "GitHub",
      url: "http://github.com/achadha235",
    },
    {
      icon: <TwitterIcon />,
      name: "LinkedIn",
      url: "http://twitter.com/achadha235",
    },
    { icon: <MailIcon />, name: "Email", ref: linkRef },
  ];
  return (
    <>
      {details.map(({ icon, name, url, ref }, i) => {
        return (
          <a
            key={i}
            {...(ref ? { ref: ref as any } : {})}
            {...(url ? { href: url as string } : {})}
            href={url}
            target="_blank"
            className="no-underline outline-none"
          >
            <span className="px-4">
              {icon} {name}
            </span>
          </a>
        );
      })}
    </>
  );
  return (
    <>
      <a
        href="https://www.linkedin.com/in/abhishek-chadha-53b09364/"
        target="_blank"
        className="no-underline outline-none"
      >
        <span className="px-4">
          <LinkedInIcon /> LinkedIn
        </span>
      </a>
      <a
        href="http://github.com/achadha235"
        target="_blank"
        className="no-underline outline-none"
      >
        <span className="px-4">
          <GitHubIcon /> GitHub
        </span>
      </a>
      <a
        href="http://twitter.com/achadha235"
        target="_blank"
        className="no-underline outline-none"
      >
        <span className="px-4">
          <TwitterIcon /> Twitter
        </span>
      </a>
      <a ref={linkRef as any} className="no-underline outline-none">
        <span className="px-4">
          <MailIcon /> Email
        </span>
      </a>
    </>
  );
}

export default ContactDetails;
