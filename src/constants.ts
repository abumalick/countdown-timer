export const DEFAULT_SECONDS = 60

export enum STATE {
  'NOT_STARTED' = 'NOT_STARTED',
  'STARTED' = 'STARTED',
  'PAUSED' = 'PAUSED',
  'COMPLETED' = 'COMPLETED',
}

export type Speed = 1 | 1.5 | 2

export const SPEEDS: Speed[] = [1, 1.5, 2]

export const RED_TIME = 20
export const BLINKING_TIME = 10
