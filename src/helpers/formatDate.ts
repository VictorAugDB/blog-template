export function formatDate(format: string, date: Date) {
  return Intl.DateTimeFormat(format).format(date)
}