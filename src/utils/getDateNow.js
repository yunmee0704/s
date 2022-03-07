const WEEKDAY_LABLES = ['일', '월', '화', '수', '목', '금', '토']

function getDateNow() {
  const now = new Date()

  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()

  const weekday = now.getDay()

  return {
    nowDate: `${year}.${month}.${day}`,
    weekdayLabel: WEEKDAY_LABLES[weekday],
  }
}

export default getDateNow
