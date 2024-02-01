import { useRef, useEffect, MutableRefObject } from "react";

function ContactDetails() {
  const details = [
    {
      icon: <i aria-hidden className="fa-brands fa-linkedin" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhishek-chadha-53b09364/",
    },
    {
      icon: <i aria-hidden className="fa-brands fa-github" />,
      name: "GitHub",
      url: "http://github.com/achadha235",
    },
    {
      icon: <i aria-hidden className="fa-brands fa-twitter" />,
      name: "LinkedIn",
      url: "http://twitter.com/achadha235",
    },
    {
      icon: <span className="material-symbols-outlined">mail</span>,
      name: "Email",
      url: atob("bWFpbHRvOmFiaGlzaGVrY2hhZGhhMjM1QGdtYWlsLmNvbQ=="),
    },
  ];
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-4">
      {details.map(({ icon, name, url }, i) => {
        return (
          <a
            key={i}
            {...(url ? { href: url as string } : {})}
            href={url}
            target="_blank"
            className=" btn btn-lg text-[2rem] no-underline outline-none"
          >
            <span className="px-4 flex justify-center items-center gap-2">
              {icon}
            </span>
          </a>
        );
      })}
    </div>
  );
}

export default ContactDetails;
