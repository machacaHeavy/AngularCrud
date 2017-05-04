export const MenuApi = [
    {
      name: 'Home',
      path: '/home',
      icon: 'fa fa-home',
      subOption: []
    },
    {
      name: 'Users',
      path: '/user',
      icon: 'fa fa-user-o',
      subOption: [
            {
              name: 'Create',
              path: '/user/create',
              icon: 'fa fa-floppy-o'
            },
            {
              name: 'List',
              path: '/user/list',
              icon: 'fa fa-list-ol'
            }
        ]
     },
     {
      name: 'About',
      path: '/user',
      icon: 'fa fa-info',
      subOption: []
     }
];