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

export const getRelativeTime = (d1, d2 = new Date()) => {
  const units = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: (24 * 60 * 60 * 1000 * 365) / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000,
  };
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const elapsed = d1 - d2;

  for (let u in units) {
    if (Math.abs(elapsed) > units[u] || u == "second")
      return rtf.format(Math.round(elapsed / units[u]), u);
  }
};
