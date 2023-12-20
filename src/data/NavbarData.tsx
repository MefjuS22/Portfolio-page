import Contact from "pages/Contact";
import Home from "pages/Home";

export const data = [
  {
    to: "/portfolio-page/",
    text: "Home",
    id: "home",
    element: (<Home />)
  },
  {
    to: "/portfolio-page/contact",
    text: "Contact",
    element: (<Contact />)
  },
];
