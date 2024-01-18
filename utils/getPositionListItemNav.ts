import type Positions from "~/models/positions";

export default function () {
  const positionHero = document.getElementById("Hero")?.offsetTop;
  const positionProjects = document.getElementById("Projects")?.offsetTop;
  const positionSkills = document.getElementById("Skills")?.offsetTop;
  const positionAbout = document.getElementById("About")?.offsetTop;
  const positionContact = document.getElementById("Contact")?.offsetTop;

  const positions: Positions = {
    positionHero,
    positionAbout,
    positionContact,
    positionProjects,
    positionSkills,
  };
  return positions;
}
