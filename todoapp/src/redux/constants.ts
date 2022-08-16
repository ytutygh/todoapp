export const GET_TODOS = "GET_TODOS";
export const CHANGE_TAB = "CHANGE_TAB";
export const SINGLE = 1;
export const DEADLINE_SECS = 3600;

export enum todoStatus {
  ALL = "All",
  ACTIVE = "Active",
  COMPLETED = "Completed",
  EXPIRED = "Expired",
}

export enum Variant {
  OUTLINED = "outlined",
  STANDARD = "standard",
  CONTAINED = "contained",
}

export enum Size {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum Color {
  PRIMARY = "primary",
  DANGER = "danger",
  SUCCESS = "success",
  WARNING = "warning",
  SECONDARY = "secondary",
  INFO = "info",
}
