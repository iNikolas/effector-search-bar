import { format, Interval, isSameDay } from 'date-fns';

export function not(value: boolean) {
  return !value;
}

export function formatDateTime(date: Date | number) {
  return format(date, 'yyyy.MM.dd HH:mm');
}

export function formatTime(date: Date | number) {
  return format(date, 'HH:mm');
}

export function formatInterval({ start, end }: Interval) {
  if (isSameDay(start, end)) {
    return `${formatDateTime(start)} — ${formatTime(end)}`;
  }

  return `${formatDateTime(start)} — ${formatDateTime(end)}`;
}