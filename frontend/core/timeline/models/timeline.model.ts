export interface Timeline {
  title: string;
  iconName?: string;
  tileInfos?: TileInfo[];
}

export interface TileInfo {
  id?: string;
  title: string;
  link?: LinkInfo;
  subtitle?: string;
  about?: string;
  highlight?: boolean;
  iconName?: string;
  video?: VideoInfo;
}

export interface LinkInfo {
  name?: string;
  target?: string;
  url: string;
  iconName?: string;
}

export interface VideoInfo {
  width?: number;
  height?: number;
  src?: string;
  type?: string;
  embed?: string;
}
