const getDate = (createdAt) => {
  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  const dateObject = new Date(createdAt);
  const year = dateObject.getFullYear();
  const date = dateObject.getDate();
  const month = months[dateObject.getMonth(date)];
  return `${month} ${date}, ${year}`;
};

export default getDate;
