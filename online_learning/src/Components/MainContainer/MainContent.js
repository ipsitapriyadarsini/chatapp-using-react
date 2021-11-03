import React, { useState } from 'react'
import Schedule from './Schedule'
import Header from '../Header/Header'
import DateFnsUtils from '@date-io/date-fns'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Box } from '@mui/material'
import LocalActivityIcon from '@material-ui/icons/LocalActivity'
import FlashOffIcon from '@material-ui/icons/FlashOff'
import ForumIcon from '@material-ui/icons/Forum'
import './MainContent.scss'
const boxList = [
  {
    name: 'Your Wrokout was accepted',
    icon: <LocalActivityIcon />,
  },
  {
    name: 'Your Practice was not creative...',
    icon: <FlashOffIcon />,
  },
  {
    name: 'Mohesen,responded to your ...',
    icon: <ForumIcon />,
  },
  {
    name: 'Studdents uploaded their excercises',
    icon: <FlashOffIcon />,
  },
]

const MainContent = () => {
  const [date, changeDate] = useState(new Date())

  return (
    <div className="maincontainer">
      <Header />
      <div className="first-row">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            autoOk
            orientation="landscape"
            variant="static"
            openTo="date"
            value={date}
            onChange={changeDate}
          />
        </MuiPickersUtilsProvider>
        <Box>
          <div className="box-container">
            <ul>
              {boxList.map((val, key) => {
                return (
                  <li key={key}>
                    <span id="circular-icon">{val.icon}</span>
                    <span id="list-value">{val.name}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </Box>
        <Schedule />
      </div>
    </div>
  )
}

export default MainContent
