export function formatDate(date: Date) {
  const pad = (num: number) => (num < 10 ? `0${num}` : num);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = pad(date.getDate());
  let monthIndex = date.getMonth();
  let month = months[monthIndex];
  let year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
