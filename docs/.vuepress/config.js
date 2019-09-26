module.exports = {
    base: '/MATI/',
    title: 'MATI　UI',
    description: '一个简易的初学者UI框架',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '导航', link: '/guide/' },
            { text: '搜索', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/'
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                  '/component/button/',
                ]
            },
        ]

    }
}