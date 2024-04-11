const POINTS_COUNT = 5;
const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;
const MAX_PRICE_VALUE = 200;
const MSEC_IN_HOUR = MSEC_IN_SEC * SEC_IN_MIN * MIN_IN_HOUR;
const MSEC_IN_DAY = MSEC_IN_HOUR * HOUR_IN_DAY;
const MAX_IMAGES_COUNT = 5;

const EVENT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
];

const CITIES = [
  'Paris',
  'London',
  'Chicago',
  'Tokio',
  'New York',
  'Moscow',
  'Amsterdam',
  'San-Francisco'
];

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto labore atque!',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem exercitationem culpa, molestias qui eveniet corrupti?',
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, dolorem.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ad eaque cupiditate praesentium maxime.',
];

const Price = {
  MIN: 1,
  MAX: 500,
};

const MocksMaxCount = {
  OFFERS: 7,
  POINTS: 5,
};

const DateFormat = {
  TIME: 'HH:mm',
  SHORT: 'MMM DD',
  FULL: 'YYYY-MM-DDTHH:mm',
  WITH_DELIMITER: 'DD/MM/YY HH:mm',
};

const DurationFormat = {
  DAYS: 'DD[D] HH[H] mm[M]',
  HOURS: 'HH[H] mm[M]',
  MINS: 'mm[M]',
};

export {
  POINTS_COUNT,
  MSEC_IN_SEC,
  SEC_IN_MIN,
  MIN_IN_HOUR,
  HOUR_IN_DAY,
  MAX_PRICE_VALUE,
  MSEC_IN_HOUR,
  MSEC_IN_DAY,
  MAX_IMAGES_COUNT,
  EVENT_TYPES,
  CITIES,
  DESCRIPTIONS,
  Price,
  MocksMaxCount,
  DateFormat,
  DurationFormat,
};
