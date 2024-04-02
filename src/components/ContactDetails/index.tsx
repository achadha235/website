import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

function ContactDetails() {
  const details = [
    {
      icon: <IconBrandLinkedin size={42} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhishek-chadha-53b09364/",
    },
    {
      icon: <IconBrandGithub size={42} />,
      name: "GitHub",
      url: "http://github.com/achadha235",
    },
    {
      icon: <IconBrandX size={42} />,
      name: "Twitter",
      url: "http://twitter.com/achadha235",
    },
    {
      icon: <IconMail size={42} />,
      name: "Email",
      url: "mailto:hello@achadha.com",
    },
  ];
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-4  bg-base-100 bg-opacity-30 backdrop-blur-sm rounded-btn">
      {details.map(({ icon, name, url }, i) => {
        return (
          <a
            key={i}
            {...(url ? { href: url as string } : {})}
            href={url}
            target="_blank"
            className=" btn btn-ghost btn-lg text-[2rem] no-underline outline-none"
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
