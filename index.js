function updateCurrentLocalTime() {
    const currentDate = new Date();
    const options = { timeZone:'Africa/Lagos'}; //Nigeria time Zone
    const localTime = currentDate.toLocaleTimeString('en-US', options);
    const utcTimeMilliseconds = currentDate.getTime();
    document.querySelector('[data-testid="currentUTCTime"]').textContent =
    'Local Time: ' + localTime + 
    ' UTC Time (ms): ' +utcTimeMilliseconds;
}

updateCurrentLocalTime();

setInterval(updateCurrentLocalTime, 1000);

function updateCurrentDayOfTheWeek() {
    const daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const currentDate = new Date();
    const options ={ weekday: 'long', timeZone: 'Africa/Lagos'};
    const currentDay = new Intl.DateTimeFormat('en-US', options).format(currentDate);

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
}

updateCurrentDayOfTheWeek();

setInterval(updateCurrentDayOfTheWeek, 86400000);

