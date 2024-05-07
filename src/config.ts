import {
  Home,
  Feather,
  Twitter,
  Linkedin,
  Calendar,
  Smartphone,
  Octagon,
  Layers,
  User,
} from "react-feather";

const config = {
  app: {
    title: "Navin's Journey",
    subtitle: "Founder / T-shaped Generalist",
    thumbnailUrl: "/img/Edited Pic.JPG",
  },
  meta: {
    url: "https://navinsjourney.com",
    title: "Navin's Journey",
    description: "Documenting everything along the way",
    twitter: {
      username: "0xNavin",
    },
  },
  menu: [
    {
      icon: Home,
      title: "Home",
      href: "/",
    },
    {
      icon: Feather,
      title: "Writing",
      href: "/article",
    },
    {
      icon: Layers,
      title: "Stack",
      href: "/stack",
    },

    {
      title: "Startups",
      items: [
        {
          icon: Smartphone,
          title: "ContinuOS",
          href: "https://letscontinue.co",
        },
        {
          icon: User,
          title: "Samudai",
          href: "https://samudai.xyz",
        },
      ],
    },
    {
      title: "Online",
      items: [
        {
          icon: Twitter,
          title: "Twitter",
          href: "https://twitter.com/0xNavin",
        },
        {
          icon: Linkedin,
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/thenavin/",
        },
      ],
    },
  ],
};

export default config;
