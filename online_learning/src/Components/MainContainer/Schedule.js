import React from 'react'
import ClassIcon from '@mui/icons-material/Class'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School'
const scheduleSubjects = [
  { icon: <DescriptionIcon/>, name: 'Figma exam', timing: '11.00AM' },
  { icon: <SchoolIcon />, name: 'Announcement of scores', timing: '10:33AM' },
  { icon: <ImportContactsIcon />, name: 'Xd class', timing: '10:33AM' },
  { icon: <ClassIcon />, name: 'Xd sourse', timing: '11.00AM' },
  { icon: <DescriptionIcon />, name: 'Figma exam', timing: '11.00AM' },
  { icon: <ImportContactsIcon />, name: 'Xd class', timing: '10.30AM' },
]

const Schedule = () => {
  return (
    <>
      <div>
        <ul>{scheduleSubjects.map((val, key) => {return(
            <li key={key}>
            <span id="circular-icon">{val.icon}</span>
                    <span id="list-value">{val.name}</span>
                    <span id="list-value">{val.timing}</span>
            </li>
        )})}</ul>
      </div>
    </>
  )
}

export default Schedule
