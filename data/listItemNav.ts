import ModelListItem from "~/models/model.listItemNav";
const listItemNav: ModelListItem[] = [
  {
    title: "Inicio",
    position: "inicio",
    id: "Hero",
    icon: "home",
  },
  {
    title: "Proyectos",
    position: "projects",
    id: "Projects",
    icon: "arrow-down",
    subMenu: [
      {
        name: "Parque nacional Mochima",
        link: "/projects/parque-nacional-mochima",
        icon: "beach",
      },
      {
        name: "Dashboard Parque",
        link: "/projects/parque-nacional-mochima",
        icon: "dashboard",
      },
      {
        name: "Parque nacional Mochima",
        link: "/projects/parque-nacional-mochima",
        icon: "beach",
      },
      {
        name: "Dashboard Parque",
        link: "/projects/parque-nacional-mochima",
        icon: "dashboard",
      },
    ],
  },
  {
    title: "Habilidades",
    position: "skills",
    id: "Skills",
    icon: "",
  },
  {
    title: "Sobre Mi",
    position: "about",
    id: "About",
    icon: "user",
  },
  {
    title: "Redes",
    position: "networks",
    id: "Networks",
    icon: "contact",
  },
];
export default listItemNav;
