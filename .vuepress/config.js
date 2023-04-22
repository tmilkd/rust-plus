module.exports = {
    title: 'Rust Plus',
    themeConfig: {
        navbar: true,
        sidebar: true
    },
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Rust Plus',
            description: 'Rust Plus Website'
        }
    },
    plugins: [
        [
            'vuepress-plugin-auto-sidebar',
            {
                title: 'Files', // 侧边栏名称
                sidebarDepth: 2, // 侧边栏深度
                collapsable: false, // 是否可折叠
                path: '/pdf/files/', // 文件夹路径
            },
        ],
    ],
}
