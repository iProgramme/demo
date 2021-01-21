export default [
    {
        path: '/',
        component: '../layouts/BlankLayout',
        routes: [
            {
                path: '/user',
                component: '../layouts/UserLayout',
                routes: [
                    {
                        name: 'login',
                        path: '/user/login',
                        component: './User/login',
                    },
                ],
            },
            {
                path: '/',
                component: '../layouts/SecurityLayout',
                routes: [
                    {
                        path: '/',
                        component: '../layouts/BasicLayout',
                        authority: ['admin', 'user'],
                        routes: [
                            {
                                path: '/',
                                redirect: '/welcome',
                            },
                            {
                                path: '/welcome',
                                name: 'welcome',
                                icon: 'smile',
                                component: './Welcome',
                            },
                            {
                                path: '/equipment/newChargecPolo',
                                name: 'equipment.newChargecPolo',
                                icon: 'smile',
                                component: './NewChargecPolo',
                                hideInMenu: true, //隐藏某菜单的路由
                            },
                            {
                                path: '/admin',
                                name: 'admin',
                                icon: 'crown',
                                component: './Admin',
                                authority: ['admin'],
                                routes: [
                                    {
                                        path: '/admin/sub-page',
                                        name: 'sub-page',
                                        icon: 'smile',
                                        component: './Welcome',
                                        authority: ['admin'],
                                    },
                                ],
                            },
                            {
                                name: 'equipment',
                                icon: 'table',
                                path: '/equipment',
                                routes: [
                                    {
                                        name: "store",
                                        path: "/equipment/store",
                                        component: './EquipmentStore',
                                        // routes: [
                                        //     {
                                        //         name: "recording",
                                        //         path: "/equipment/store/recording",
                                        //         component: './TableList',
                                        //     }, {
                                        //         name: "lock",
                                        //         path: "/equipment/store/lock",
                                        //         component: './TableList',
                                        //     }, {
                                        //         name: "ammeter",
                                        //         path: "/equipment/store/ammeter",
                                        //         component: './TableList',
                                        //     },
                                        // ]
                                    },
                                    {
                                        name: "control",
                                        path: "/equipment/control",
                                        component: './EquipmentControl',
                                    }, {
                                        name: "repair",
                                        path: "/equipment/repair",
                                        component: './TableList',
                                    }, {
                                        name: "update",
                                        path: "/equipment/update",
                                        component: './TableList',
                                    },
                                ]
                            }, {
                                name: 'site',
                                icon: 'table',
                                path: '/site',
                                routes: [
                                    {
                                        name: 'map',
                                        icon: 'table',
                                        path: '/site/map',
                                        component: './TableList',
                                    }, {
                                        name: 'manage',
                                        icon: 'table',
                                        path: '/site/manage',
                                        component: './TableList',
                                    },
                                ]
                            }, {
                                name: 'list.table-list',
                                icon: 'table',
                                path: '/list',
                                component: './TableList',
                            }, {
                                name: 'operationLog',
                                icon: 'table',
                                path: '/operationLog',
                                component: './TableList',
                            }, {
                                name: 'charge',
                                icon: 'table',
                                path: '/charge',
                                routes: [
                                    {
                                        name: 'order',
                                        icon: 'table',
                                        path: '/charge/order',
                                        component: './TableList',
                                    },
                                ]
                            },
                            {
                                component: './404',
                            },
                        ],
                    },
                    {
                        component: './404',
                    },
                ],
            },
            {
                component: './404',
            },
        ],
    },
    {
        component: './404',
    },
];
