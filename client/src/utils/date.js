import moment from "moment";

export const unixToLocaleDate = (unix_datetime) => {
  if (unix_datetime === null) return null;

  const date = new Date(unix_datetime);
  return date.toLocaleString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/New_York",
    timeZoneName: "short",
  });
};

export const getRelativeTime = (timestamp) => {
  return moment(timestamp).fromNow();
};
