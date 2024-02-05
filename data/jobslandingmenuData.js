export let menuData = [
    {
        path: 'home',
        type: 'link',
        title: 'Home',
        selected: false,
        active: false,
        dirchange: false,
    },
    {
        path: 'jobs',
        type: 'link',
        title: 'Jobs',
        selected: false,
        active: false,
        dirchange: false,
    },
    {
        path: 'candidates',
        type: 'link',
        title: 'Candidates',
        selected: false,
        active: false,
        dirchange: false,
    },
    {
        type: 'sub',
        title: 'More',
        selected: false,
        active: false,
        dirchange: false,
        children: [
            {
                path: '#',
                type: 'link',
                title: 'Level-1',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                path: '#',
                type: 'link',
                title: 'Level-1-1',
                selected: false,
                active: false,
                dirchange: false,
            },
            {
                type: 'sub',
                title: 'Level-2',
                selected: false,
                active: false,
                dirchange: false,
                children: [
                    {
                        path: '#',
                        type: 'link',
                        title: 'Level-2-1',
                        selected: false,
                        active: false,
                        dirchange: false,
                    },
                    {
                        type: 'sub',
                        title: 'Level-2.2',
                        selected: false,
                        active: false,
                        dirchange: false,
                        children: [
                            {
                                path: '#',
                                type: 'link',
                                title: 'Level-2-2-1',
                                selected: false,
                                active: false,
                                dirchange: false,
                            },
                            {
                                path: '#',
                                type: 'link',
                                title: 'Level-2-2-2',
                                selected: false,
                                active: false,
                                dirchange: false,
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        path: 'employers',
        type: 'link',
        title: 'For Employers',
        selected: false,
        active: false,
        dirchange: false,
    },
    {
        path: 'career-advice',
        type: 'link',
        title: 'Career Advice',
        selected: false,
        active: false,
        dirchange: false,
    },
];