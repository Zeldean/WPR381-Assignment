const fs = require('fs').promises;
const path = require('path');
const eventsData = path.join(__dirname, "../data/events.json");

async function getEvents() {
  try {
    const data = await fs.readFile(eventsData, 'utf8');
    const parsed = JSON.parse(data);
    return parsed.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
  } catch (err) {
    console.error('Error loading events:', err);
    return [];
  }
}

function displayDate(startDate, endDate, startTime, endTime) {
  if (!startDate) return "Unknown";

  let date = `${startDate}`;
  if (endDate && endDate !== startDate) date += ` to ${endDate}`;
  if (startTime) {
    date += `\n${startTime}`;
    if (endTime) date += ` to ${endTime}`;
  }

  return date;
}

module.exports = {
  getEvents,
  displayDate
};
