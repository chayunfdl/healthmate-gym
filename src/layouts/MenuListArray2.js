export const MenuListArray2 = [
    {
        title: 'Home',
        to: '/', // Mengubah ke direct link tanpa submenu
        classChange: '', // Menghilangkan sub-menu-down
    },
    {
        title: 'Services',
        classChange: 'sub-menu-down',
        content: [
            {
                title: 'Services',
                to: '/services',
            },
            {
                title: 'Services Details',
                to: '/services-details',
            },
        ],
    },
    {
        title: 'Contact Us',
        to: '/contact-us',
    },
]