import {Collection} from '../../../core/collection/models/collection.model';
import {Progress} from '../../../core/progress-circle/models/progress-circle.model';
import {TileInfo, Timeline} from '../../../core/timeline/models/timeline.model';

export interface About {
  expertiseInfo: ExpertiseInfo;
  skillInfo: SkillInfo;
  experience: Timeline;
  education: Timeline;
}

export interface ExpertiseInfo {
  title?: string;
  expertises: Progress[];
}

export interface SkillInfo {
  title?: string;
  skills: Collection[];
}

export interface Contact {
  title?: string;
  details: TileInfo[];
}

export interface SendMessagePayload {
  name: string;
  email: string;
  message?: string;
}

export interface Research {
  title?: string;
  researchInfos: TileInfo[];
}
