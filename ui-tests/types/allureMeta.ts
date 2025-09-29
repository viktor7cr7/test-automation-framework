export type AllureMeta = {
  severity?: 'blocker' | 'critical' | 'normal' | 'minor' | 'trivial';
  issue?: string;
  epic?: string;
  feature?: string;
  story?: string;
};