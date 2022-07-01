import { Action } from "kbar";

const actions: Action[] = [
  {
    id: "home",
    name: "Home",
    subtitle: "Go to main page",
    shortcut: ["h"],
    keywords: "home back main menu",
    section: "Navigation",
    perform: () => window.open("/", "_self"),
  },
  {
    id: "projects",
    name: "Projects",
    subtitle: "Go to Projects page",
    shortcut: ["p"],
    keywords: "projects portfolio",
    section: "Navigation",
    perform: () => window.open("/projects", "_self"),
  },
  {
    id: "blog",
    name: "Blog",
    subtitle: "Go to my Blog",
    shortcut: ["b"],
    keywords: "blog articles",
    section: "Navigation",
    perform: () => window.open("/blog", "_self"),
  },
  {
    id: "about",
    name: "About",
    subtitle: "Who am I?",
    shortcut: ["a"],
    keywords: "about who bio resume cv",
    section: "Navigation",
    perform: () => window.open("/about", "_self"),
  },
  {
    id: "resume",
    name: "Resume",
    subtitle: "Download my resume",
    shortcut: ["r"],
    keywords: "resume download cv",
    section: "Navigation",
    perform: () =>
      window.open(
        "/static/Benoît Clemenceau Resume v5.4.pdf",
        "_blank"
      ),
  },
  {
    id: "github",
    name: "GitHub",
    subtitle: "View my open source projects",
    shortcut: ["g"],
    keywords: "github open source open-source projects",
    section: "Contact",
    perform: () => window.open("https://github.com/ben-clem", "_blank"),
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    subtitle: "Go to my LinkedIn",
    shortcut: ["l"],
    keywords: "linkedin resume work hire social cv",
    section: "Contact",
    perform: () =>
      window.open("https://www.linkedin.com/in/benclem", "_blank"),
  },
  {
    id: "email",
    name: "Email",
    subtitle: "Send me an email",
    shortcut: ["e"],
    keywords: "email mail hello contact",
    section: "Contact",
    perform: () => window.open("mailto:benoit.clemenceau@mac.com", "_blank"),
  },
  {
    id: "telephone",
    name: "Telephone",
    subtitle: "Call me",
    shortcut: ["t"],
    keywords: "telephone hello call contact",
    section: "Contact",
    perform: () => window.open("tel:+1 (857) 337-8248", "_blank"),
  },
];

export default actions;
