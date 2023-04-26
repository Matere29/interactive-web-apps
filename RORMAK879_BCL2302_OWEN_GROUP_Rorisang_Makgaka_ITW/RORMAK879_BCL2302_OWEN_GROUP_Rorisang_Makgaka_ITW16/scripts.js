const MONTHS = [  'Jan',  'Feb',  'Mar',  'Apr',  'May',  'Jun',  'Jul',  'Aug',  'Sep',  'Oct',  'Nov',  'Dec',];

const data = {
  response: {
    requestType: 'FETCH_ATHLETE_DATA',
    requestBy: 'ALL_MATCHING_ATHLETES',
    forDisplay: 'BEST_RACES',

    data: {
      NM372: {
        firstName: 'Nwabisa',
        surname: 'Masiko',
        id: 'NM372',
        races: [
          {
            date: new Date('2022-11-18T20:00:00.000Z'),
            time: [9, 7, 8, 6],
          },
          {
            date: new Date('2022-12-02T20:00:00.000Z'),
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: 'Schalk',
        surname: 'Venter',
        id: 'SV782',
        races: [
          {
            date: new Date('2022-11-18T20:00:00.000Z'),
            time: [10, 8, 3, 12],
          },
          {
            date: new Date('2022-11-25T20:00:00.000Z'),
            time: [6, 8, 9, 11],
          },
          {
            date: new Date('2022-12-02T20:00:00.000Z'),
            time: [10, 11, 4, 8],
          },
          {
            date: new Date('2022-12-09T20:00:00.000Z'),
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

const createHtml = (athlete) => {
  //variables were not properly assigned values from athlete object
  const { firstName, surname, id, races } = athlete;
  const { date, time: timeAsArray } = races[races.length - 1];

  const fragment = document.createDocumentFragment();
  //Title and List variables are not properly initialized, missing quotes
//inseted single quotes around h2
  const title = document.createElement('h2');
  title.textContent = id;
  fragment.appendChild(title);

//inseted single quotes around h2
  const list = document.createElement('dl');

  /*The date object in races array is not properly parsed
  The code attempts to access the date object directly, but date object do not have a month. So I used getMonth() method
  */
  const day = date.getDate();
  const month = MONTHS[date.getMonth()];//changed month to getMonth() method
  const year = date.getFullYear();//changed year to getFullYear() method

  //fixed syntax of timeAsArray
  const [first, second, third, fourth] = timeAsArray;
  const total = first + second + third + fourth;
/* the time array in races object is not properly processed and  time is not properly formatted
*/
  const hours = Math.floor(total / 60);//Used Math.floor() to get whole numbers in this case, hours
  const minutes = total % 60; // used modulus to get minutes

  //fixed interpolation syntax 
  list.innerHTML = /* html */ `
    <dt>Athlete</dt>
    <dd>${firstName} ${surname}</dd>

    <dt>Total Races</dt>
    <dd>${races.length}</dd>

    <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dd>
  `;

  fragment.appendChild(list);

  return fragment;
};
//NM372 and SV782 are not properly initialized with quotes to indicate they strings
const NM372 = document.querySelector('[data-athlete="NM372"]');
NM372.appendChild(createHtml(data.response.data.NM372));

const SV782 = document.querySelector('[data-athlete="SV782"]');
SV782.appendChild(createHtml(data.response.data.SV782));
