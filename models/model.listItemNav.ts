export default class ModelListItem {
  "title": string;
  "position": string;
  "id": string;
  "icon": string;
  "subMenu"?: {
    name: string;
    link: string;
    icon: string;
  }[];
}
