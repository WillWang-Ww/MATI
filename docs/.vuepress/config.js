module.exports = {
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
                title: '安装',
                collapsable: false,
                children: [
                    '/install'
                ]
            }
        ]

    }
}