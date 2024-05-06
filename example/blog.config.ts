import {
  Home,
  Feather,
  Twitter,
  Linkedin,
  GitHub,
  Figma,
  CheckSquare,
  Mic,
  Briefcase,
  Layers,
  Package,
  Octagon,
  Phone,
  Smartphone,
} from "react-feather";

const config = {
  app: {
    title: "Navin's Joueney",
    subtitle: "Documenting everything on the way",
    thumbnailUrl: "/img/logo.svg",
  },
  meta: {
    url: "https://reshaped-blog-starter.vercel.app",
    title: "Navin's Journey",
    description: "Documenting everything on the way",
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
          title: "ContinuOS - Your curated internet",
          href: "https://letscontinue.co",
        },
        {
          icon: Octagon,
          title: "Samudai - SaaS for remote teams",
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
        {
          icon: Figma,
          title: "Figma",
          href: "https://www.figma.com/@reshaped",
        },
      ],
    },
  ],
};

export default config;
