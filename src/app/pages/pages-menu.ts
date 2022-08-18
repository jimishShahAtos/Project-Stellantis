import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
   {
    title: 'Search',
    icon: 'search-outline',
    link: '/pages/search',
    home: true,
  },
  {
    title: 'Administration',
    icon: 'people-outline',
    link: '/pages/administration',
    children: [
      {
        title: 'Roles Management',
        icon:'person-done-outline',
        link: '/pages/administration/roleMgt',
      }
    ],
  },
  {
    title: 'Workflow Orchestration',
    icon: 'briefcase-outline',
    link: '/pages/workflow-orchestration',
    children: [
      {
        title: 'Workflow',
        icon:'browser-outline',
        link: '/pages/workflow-orchestration/workflow',
      }
    ]
  }
];
