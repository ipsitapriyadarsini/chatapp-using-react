import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import SmsIcon from '@material-ui/icons/Sms'
import SettingsIcon from '@material-ui/icons/Settings'
import BackupIcon from '@material-ui/icons/Backup'
import AnnouncementIcon from '@material-ui/icons/Announcement'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'

export const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <DashboardIcon />,
  },
  {
    title: 'Messages',
    path: '/Messages',
    icon: <SmsIcon />,
  },

  {
    title: 'Announcement',
    path: '/Announcement',
    icon: <AnnouncementIcon />,
  },
  {
    title: 'Backup',
    path: '/Backup',
    icon: <BackupIcon />,
  },
  {
    title: 'Settings',
    path: '/Settings',
    icon: <SettingsIcon />,
  },
  {
    title: 'Logout',
    path: '/Logout',
    icon: <PowerSettingsNewIcon />,
  },
]
