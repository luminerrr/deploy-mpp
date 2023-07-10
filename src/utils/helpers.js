function convertToRad (coordinate){
  return (coordinate * Math.PI) / 180;
}

function calculateTimeDifference(startTime, endTime) {
  const [startHour, startMinute, startSecond] = startTime.split(":");
  const [endHour, endMinute, endSecond] = endTime.split(":");

  const startDate = new Date();
  startDate.setHours(startHour, startMinute, startSecond);

  const endDate = new Date();
  endDate.setHours(endHour, endMinute, endSecond);

  const timeDifference = endDate.getTime() - startDate.getTime();
  const diffInSeconds = Math.floor(timeDifference / 1000);

  const hours = Math.floor(diffInSeconds / 3600);
  const minutes = Math.floor((diffInSeconds % 3600) / 60);
  const seconds = diffInSeconds % 60;

  return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

export {convertToRad, calculateTimeDifference}