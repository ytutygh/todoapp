import { DEADLINE_SECS } from "./../redux/constants";
import moment from "moment";

export const showTime = (time: string) => {
  return moment(time).format("lll");
};

export const showTimeLeft = (time: string, isCompleted: boolean) => {
  if (!isExpired(time, isCompleted))
    return moment(time).diff(moment(), "second");
  return 0;
};

export const formatTimeLeft = (secs: number) =>
  moment.utc(secs * 1000).format("mm:ss");

export const isDeadline = (time: string, isCompleted: boolean) =>
  showTimeLeft(time, isCompleted) > 0 &&
  showTimeLeft(time, isCompleted) < DEADLINE_SECS;

export const isExpired = (time: string, isCompleted: boolean) =>
  !isCompleted && moment(time).isBefore(moment());
