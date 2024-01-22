export default class ModelSkillsProjects {
  "crud-mochima": TypeSkills;
  "vue-anime": TypeSkills;
  "parque-nacional-mochima": TypeSkills;
  "dashboard-nest": TypeSkills;
}
class TypeSkills {
  "frontend": Skills[];
  "backend"?: Skills[];
}

class Skills {
  "icon": string;
  "title": string;
}
