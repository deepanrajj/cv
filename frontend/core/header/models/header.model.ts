export interface Header {
  menus: NavigationMenu[];
  person: Person;
}

export interface NavigationMenu {
  id: number;
  name?: string;
  url: string;
  iconName?: string;
  download?: string;
  tooltip?: string;
}

export interface Person {
  firstName: string;
  lastName: string;
  imageUrl: string;
  profiles?: PersonProfile[];
}

export interface PersonProfile {
  url: string;
  name?: string;
  iconName?: string;
  target: string;
}
