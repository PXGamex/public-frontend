export const getMenuData = [
  {
    title: 'Dashboard',
    key: 'dashboard',
    url: '/dashboard',
    icon: 'fe fe-home',
  },
  {
    category: true,
    title: 'Following',
  },
  {
    title: 'Streamers',
    key: 'apps',
    icon: 'fe fe-user',
    children: [
      {
        title: 'Shroud',
        key: 'appsProfile',
        url: '/apps/profile',
      },
      {
        title: 'Ninja',
        key: 'appsCalendar',
        url: '/apps/calendar',
      },
      {
        title: 'Dr. D',
        key: 'appsGallery',
        url: '/apps/gallery',
      },
    ],
  },
  {
    title: 'Categories',
    key: 'extraApps',
    icon: 'fe fe-grid',
    children: [
      {
        title: 'Escape from Tarkov',
        key: 'extraAppsJiraAgileBoard',
        url: '/apps/jira-agile-board',
      },
      {
        title: 'Just Chatting',
        key: 'extraAppsHelpdeskDashboard',
        url: '/apps/helpdesk-dashboard',
      },
    ],
  },
]
