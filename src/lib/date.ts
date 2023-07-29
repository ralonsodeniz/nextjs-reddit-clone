/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatDistanceToNowStrict } from 'date-fns';
import locale from 'date-fns/locale/en-US';

const formatDistanceLocale = {
  aboutXHours: '{{count}}h',
  aboutXMonths: '{{count}}m',
  aboutXWeeks: '{{count}}w',
  aboutXYears: '{{count}}y',
  almostXYears: '{{count}}y',
  halfAMinute: 'just now',
  lessThanXMinutes: '{{count}}m',
  lessThanXSeconds: 'just now',
  overXYears: '{{count}}y',
  xDays: '{{count}}d',
  xHours: '{{count}}h',
  xMinutes: '{{count}}m',
  xMonths: '{{count}}m',
  xSeconds: 'just now',
  xWeeks: '{{count}}w',
  xYears: '{{count}}y',
};

const formatDistance = (token: string, count: number, options: any = {}) => {
  const result = formatDistanceLocale[
    token as keyof typeof formatDistanceLocale
  ].replace('{{count}}', count.toString());

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      if (result === 'just now') return result;
      return result + ' ago';
    }
  }

  return result;
};

export const formatTimeToNow = (date: Date) =>
  formatDistanceToNowStrict(date, {
    addSuffix: true,
    locale: {
      ...locale,
      formatDistance,
    },
  });
