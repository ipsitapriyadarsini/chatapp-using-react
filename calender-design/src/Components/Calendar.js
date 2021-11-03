import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
const { datesGenerator } = require('dates-generator')

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const Container = styled.div`
  width: 300px;
  border: 1px solid black;
  margin: 0 auto;
  box-shadow: 10px 10px 0px black;
`

const MonthText = styled.div`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [dates, setDates] = useState([])
  const [calendar, setCalendar] = useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
  })

  useEffect(() => {
    const body = {
      month: calendar.month,
      year: calendar.year,
    }
    const {
      dates,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    } = datesGenerator(body)
    setDates([...dates])
    setCalendar({
      ...calendar,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    })
  }, [])
  const onClickNext = () => {
    const body = { month: calendar.nextMonth, year: calendar.nextYear }
    const {
      dates,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    } = datesGenerator(body)

    setDates([...dates])
    setCalendar({
      ...calendar,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    })
  }
  const onClickPrevious = () => {
    const body = { month: calendar.previousMonth, year: calendar.previousYear }
    const {
      dates,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    } = datesGenerator(body)

    setDates([...dates])
    setCalendar({
      ...calendar,
      month: calendar.previousMonth,
      year: calendar.previousYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    })
  }
  const onSelectDate = (date) => {
    setSelectedDate(new Date(date.year, date.month, date.date))
  }

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>
        <Container>
          <div style={{ padding: 10 }}>
            <div
              onClick={onClickPrevious}
              style={{ float: 'left', width: '50%' }}
            >
              Previous
            </div>
            <div
              onClick={onClickNext}
              style={{ float: 'left', width: '50%', textAlign: 'right' }}
            >
              Next
            </div>
          </div>
          <MonthText>{months[calendar.month]}</MonthText>

          <div>
            <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  {days.map((day) => (
                    <td key={day} style={{ padding: '5px 0' }}>
                      <div style={{ textAlign: 'center', padding: '5px 0' }}>
                        {day}
                      </div>
                    </td>
                  ))}
                </tr>
                <div
                  onClick={() => onSelectDate(each.jsDate)}
                  style={{ textAlign: 'center', padding: '5px 0' }}
                >
                  {each.date}
                </div>
                {dates.length > 0 &&
                  dates.map((week) => (
                    <tr key={JSON.stringify(week[0])}>
                      {week.map((each) => (
                        <td
                          key={JSON.stringify(each)}
                          style={{ padding: '5px 0' }}
                        >
                          <div
                            style={{ textAlign: 'center', padding: '5px 0' }}
                          >
                            {each.date}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div style={{ padding: 10 }}>
            Selected Date: {selectedDate.toDateString()}
          </div>
        </Container>
      </div>
    </>
  )
}
export default Calendar
