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
                                path: '/equipment/newChargePile',
                                name: 'equipment.newChargePile',
                                icon: 'smile',
                                component: './NewChargePile',
                                hideInMenu: true, //隐藏某菜单的路由
                            },
                            {
                                path: '/site/newChargeSite',
                                name: 'site.newChargeSite',
                                icon: 'smile',
                                component: './NewChargeSite',
                                hideInMenu: true, //隐藏某菜单的路由
                            },
                            {
                                path: '/equipment/chargePileDetail',
                                name: 'equipment.chargePileDetail',
                                icon: 'smile',
                                component: './ChargePileDetail',
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
                                        name: "statusControl",
                                        path: "/equipment/statusControl",
                                        component: './EquipmentStatusControl',
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
                                        name: 'library',
                                        icon: 'table',
                                        path: '/site/library',
                                        component: './SiteLibrary',
                                    },
                                    // 站点数据统计
                                    {
                                        name: 'dataStatistics',
                                        icon: 'table',
                                        path: '/site/dataStatistics',
                                        component: './DataStatistics',
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
