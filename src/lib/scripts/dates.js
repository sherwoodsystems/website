function isWeekend(date) {
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6; // 0 = Sunday, 6 = Saturday
}

function isHoliday(date) {
  const holidays = {
    2024: [
      "2024-01-01", // New Year's Day
      "2024-02-19", // Ontario Family Day
      "2024-03-29", // Good Friday
      "2024-05-20", // Victoria Day
      "2024-07-01", // Canada Day
      "2024-08-05", // Civic Holiday
      "2024-09-02", // Labour Day
      "2024-10-14", // Thanksgiving
    ],
    2025: [
      "2025-01-01", // New Year's Day
      "2025-02-17", // Ontario Family Day
      "2025-04-18", // Good Friday
      "2025-05-19", // Victoria Day
      "2025-07-01", // Canada Day
      "2025-08-04", // Civic Holiday
      "2025-09-01", // Labour Day
      "2025-10-13", // Thanksgiving
    ],
    2026: [
      "2026-01-01", // New Year's Day
      "2026-02-16", // Ontario Family Day
      "2026-04-03", // Good Friday
      "2026-05-18", // Victoria Day
      "2026-07-01", // Canada Day
      "2026-08-03", // Civic Holiday
      "2026-09-07", // Labour Day
      "2026-10-12", // Thanksgiving
    ],
  };

  const year = date.getFullYear().toString();
  return holidays[year].includes(date.toISOString().split("T")[0]);
}

export function estimatePrepDate(inputDate) {
  let eventDate = new Date(inputDate);

  // Strip time component if exists, set hours to zero
  eventDate.setHours(0, 0, 0, 0);

  // Go back one day to start checking for previous business day
  eventDate.setDate(eventDate.getDate() - 1);

  // Continue going back until we find a non-weekend, non-holiday
  while (isWeekend(eventDate) || isHoliday(eventDate)) {
    eventDate.setDate(eventDate.getDate() - 1);
  }
  return eventDate;
}
