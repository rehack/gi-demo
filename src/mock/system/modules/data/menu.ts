export const menus = [
  {
    id: '01',
    parentId: '',
    path: '/analyse',
    component: 'Layout',
    redirect: '/analyse/index',
    type: 1,
    title: '分析页',
    svgIcon: '',
    icon: '',
    keepAlive: false,
    hidden: false,
    sort: 0,
    activeMenu: '',
    breadcrumb: true,
    children: [
      {
        id: '0101',
        parentId: '0',
        path: '/analyse/index',
        component: 'analyse/index',
        redirect: '',
        type: 2,
        title: '分析页',
        svgIcon: 'menu-chart',
        icon: '',
        keepAlive: false,
        hidden: false,
        sort: 2,
        activeMenu: '',
        breadcrumb: false,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: true,
        alwaysShow: false
      }
    ],
    status: 1,
    roles: ['role_admin', 'role_user'],
    permissions: [],
    affix: true,
    alwaysShow: false
  },
  {
    id: '02',
    parentId: '',
    path: '/data',
    component: 'Layout',
    redirect: '/data/index',
    type: 1,
    title: '数据管理',
    svgIcon: 'menu-data',
    icon: 'icon-list',
    keepAlive: true,
    hidden: false,
    sort: 3,
    activeMenu: '',
    breadcrumb: true,
    children: [
      {
        id: '0201',
        parentId: '02',
        path: '/data/index',
        component: 'data/main/index',
        redirect: '',
        type: 2,
        title: '数据管理',
        svgIcon: '',
        icon: 'icon-list',
        keepAlive: true,
        hidden: false,
        sort: 0,
        activeMenu: '',
        breadcrumb: false,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: true,
        alwaysShow: false
      },
      {
        id: '0202',
        parentId: '02',
        path: '/data/detail',
        component: 'data/detail/index',
        redirect: '',
        type: 2,
        title: '详情',
        svgIcon: '',
        icon: '',
        keepAlive: false,
        hidden: true,
        sort: 0,
        activeMenu: '/data',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: false,
        alwaysShow: false
      }
    ],
    status: 1,
    roles: ['role_admin', 'role_user'],
    permissions: [],
    affix: true,
    alwaysShow: false
  },
  {
    id: '03',
    parentId: '',
    path: '/file',
    component: 'Layout',
    redirect: '/file/index',
    type: 1,
    title: '文件管理',
    svgIcon: 'menu-file',
    icon: 'icon-folder',
    keepAlive: true,
    hidden: false,
    sort: 4,
    activeMenu: '',
    breadcrumb: true,
    children: [
      {
        id: '0301',
        parentId: '03',
        path: '/file/index',
        component: 'file/main/index',
        redirect: '',
        type: 2,
        title: '文件管理',
        svgIcon: '',
        icon: 'icon-folder',
        keepAlive: true,
        hidden: false,
        sort: 0,
        activeMenu: '',
        breadcrumb: false,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: true,
        alwaysShow: false
      },
      {
        id: '0302',
        parentId: '03',
        path: '/file/detail',
        component: 'file/detail/index',
        redirect: '',
        type: 2,
        title: '详情',
        svgIcon: '',
        icon: '',
        keepAlive: false,
        hidden: true,
        sort: 0,
        activeMenu: '/file',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: false,
        alwaysShow: false
      }
    ],
    status: 1,
    roles: ['role_admin', 'role_user'],
    permissions: [],
    affix: true,
    alwaysShow: false
  },
  {
    id: '04',
    parentId: '',
    path: '/form',
    component: 'Layout',
    redirect: '/form/base',
    type: 1,
    title: '表单管理',
    svgIcon: 'menu-form',
    icon: '',
    keepAlive: false,
    hidden: false,
    sort: 5,
    activeMenu: '',
    breadcrumb: true,
    children: [
      {
        id: '0401',
        parentId: '04',
        path: '/form/base',
        component: 'form/base/index',
        redirect: '',
        type: 2,
        title: '基础表单',
        svgIcon: '',
        icon: 'icon-menu',
        keepAlive: false,
        hidden: false,
        sort: 0,
        activeMenu: '',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: true,
        alwaysShow: false
      },
      {
        id: '0402',
        parentId: '04',
        path: '/form/step',
        component: 'form/step/index',
        redirect: '',
        type: 2,
        title: '分步表单',
        svgIcon: '',
        icon: 'icon-menu',
        keepAlive: false,
        hidden: false,
        sort: 0,
        activeMenu: '',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: true,
        alwaysShow: false
      }
    ],
    status: 1,
    roles: ['role_admin', 'role_user'],
    permissions: [],
    affix: true,
    alwaysShow: false
  },
  {
    id: '05',
    parentId: '',
    path: '/table',
    component: 'Layout',
    redirect: '/table/base',
    type: 1,
    title: '表格管理',
    svgIcon: 'menu-table',
    icon: '',
    keepAlive: false,
    hidden: false,
    sort: 6,
    activeMenu: '',
    breadcrumb: true,
    children: [
      {
        id: '0501',
        parentId: '05',
        path: '/table/base',
        component: 'table/base/index',
        redirect: '',
        type: 2,
        title: '基础表格',
        svgIcon: '',
        icon: 'icon-menu',
        keepAlive: false,
        hidden: false,
        sort: 0,
        activeMenu: '',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: true,
        alwaysShow: false
      },
      {
        id: '0502',
        parentId: '05',
        path: '/table/custom',
        component: 'table/custom/index',
        redirect: '',
        type: 2,
        title: '自定义表格',
        svgIcon: '',
        icon: 'icon-menu',
        keepAlive: false,
        hidden: false,
        sort: 0,
        activeMenu: '',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: true,
        alwaysShow: false
      }
    ],
    status: 1,
    roles: ['role_admin', 'role_user'],
    permissions: [],
    affix: true,
    alwaysShow: false
  },
  {
    id: '06',
    parentId: '',
    path: '/error',
    component: 'Layout',
    redirect: '/error/403',
    type: 1,
    title: '错误页',
    svgIcon: 'menu-error',
    icon: '',
    keepAlive: false,
    hidden: false,
    sort: 7,
    activeMenu: '',
    breadcrumb: true,
    children: [
      {
        id: '0601',
        parentId: '06',
        path: '/error/403',
        component: 'error/403',
        redirect: '',
        type: 2,
        title: '403页',
        svgIcon: '',
        icon: 'icon-menu',
        keepAlive: false,
        hidden: false,
        sort: 0,
        activeMenu: '',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: true,
        alwaysShow: false
      },
      {
        id: '0602',
        parentId: '06',
        path: '/error/404',
        component: 'error/404',
        redirect: '',
        type: 2,
        title: '404页',
        svgIcon: '',
        icon: 'icon-menu',
        keepAlive: false,
        hidden: false,
        sort: 0,
        activeMenu: '',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: true,
        alwaysShow: false
      },
      {
        id: '0603',
        parentId: '06',
        path: '/error/405',
        component: 'error/405',
        redirect: '',
        type: 2,
        title: '405页',
        svgIcon: '',
        icon: 'icon-menu',
        keepAlive: false,
        hidden: false,
        sort: 0,
        activeMenu: '',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: true,
        alwaysShow: false
      }
    ],
    status: 1,
    roles: ['role_admin', 'role_user'],
    permissions: [],
    affix: true,
    alwaysShow: false
  },
  {
    id: '07',
    parentId: '',
    path: '/result',
    component: 'Layout',
    redirect: '/result/success',
    type: 1,
    title: '结果页',
    svgIcon: 'menu-result',
    icon: '',
    keepAlive: false,
    hidden: false,
    sort: 8,
    activeMenu: '',
    breadcrumb: true,
    children: [
      {
        id: '0701',
        parentId: '07',
        path: '/result/success',
        component: 'result/success/index',
        redirect: '',
        type: 2,
        title: '成功页',
        svgIcon: '',
        icon: 'icon-menu',
        keepAlive: false,
        hidden: false,
        sort: 0,
        activeMenu: '',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: true,
        alwaysShow: false
      },
      {
        id: '0702',
        parentId: '07',
        path: '/result/fail',
        component: 'result/fail/index',
        redirect: '',
        type: 2,
        title: '失败页',
        svgIcon: '',
        icon: 'icon-menu',
        keepAlive: false,
        hidden: false,
        sort: 0,
        activeMenu: '',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: true,
        alwaysShow: false
      }
    ],
    status: 1,
    roles: ['role_admin', 'role_user'],
    permissions: [],
    affix: true,
    alwaysShow: false
  },
  {
    id: '08',
    parentId: '',
    path: '/system',
    component: 'Layout',
    redirect: 'noRedirect',
    type: 1,
    title: '系统管理',
    svgIcon: 'menu-system',
    icon: '',
    keepAlive: false,
    hidden: false,
    sort: 9,
    activeMenu: '',
    breadcrumb: true,
    children: [
      {
        id: '0801',
        parentId: '08',
        path: '/system/user',
        component: 'system/user/index',
        redirect: '',
        type: 2,
        title: '用户管理',
        svgIcon: '',
        icon: 'icon-user',
        keepAlive: false,
        hidden: false,
        sort: 1,
        activeMenu: '',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin'],
        permissions: [],
        affix: true,
        alwaysShow: false
      },
      {
        id: '0802',
        parentId: '08',
        path: '/system/role',
        component: 'system/role/index',
        redirect: '',
        type: 2,
        title: '角色管理',
        svgIcon: '',
        icon: 'icon-common',
        keepAlive: false,
        hidden: false,
        sort: 2,
        activeMenu: '',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin'],
        permissions: [],
        affix: true,
        alwaysShow: false
      },
      {
        id: '0803',
        parentId: '08',
        path: '/system/dept',
        component: 'system/dept/index',
        redirect: '',
        type: 2,
        title: '部门管理',
        svgIcon: '',
        icon: 'icon-mind-mapping',
        keepAlive: false,
        hidden: false,
        sort: 3,
        activeMenu: '',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin'],
        permissions: [],
        affix: true,
        alwaysShow: false
      },
      {
        id: '0804',
        parentId: '08',
        path: '/system/menu',
        component: 'system/menu/index',
        redirect: '',
        type: 2,
        title: '菜单管理',
        svgIcon: '',
        icon: 'icon-menu',
        keepAlive: false,
        hidden: false,
        sort: 4,
        activeMenu: '',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin'],
        permissions: [],
        affix: true,
        alwaysShow: false
      }
    ],
    status: 1,
    roles: ['role_admin'],
    permissions: [],
    affix: true,
    alwaysShow: false
  },
  {
    id: '081',
    parentId: '',
    path: '/test',
    component: 'Layout',
    redirect: '',
    type: 1,
    title: '权限测试',
    svgIcon: 'menu-test',
    icon: '',
    keepAlive: false,
    hidden: false,
    sort: 8,
    activeMenu: '',
    breadcrumb: true,
    children: [
      {
        id: '08101',
        parentId: '081',
        path: '/test/page1',
        component: 'test/page1/index',
        redirect: '',
        type: 2,
        title: '测试页面1',
        svgIcon: '',
        icon: 'icon-menu',
        keepAlive: false,
        hidden: false,
        sort: 0,
        activeMenu: '',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin'],
        permissions: [],
        affix: true,
        alwaysShow: false
      },
      {
        id: '08102',
        parentId: '081',
        path: '/test/page2',
        component: 'test/page2/index',
        redirect: '',
        type: 2,
        title: '测试页面2',
        svgIcon: '',
        icon: 'icon-menu',
        keepAlive: false,
        hidden: false,
        sort: 0,
        activeMenu: '',
        breadcrumb: true,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: true,
        alwaysShow: false
      }
    ],
    status: 1,
    roles: ['role_admin', 'role_user'],
    permissions: [],
    affix: true,
    alwaysShow: true
  },
  {
    id: '09',
    parentId: '',
    path: '/demo',
    component: 'Layout',
    redirect: '/demo/index',
    type: 1,
    title: '示例页',
    svgIcon: '',
    icon: '',
    keepAlive: false,
    hidden: false,
    sort: 10,
    activeMenu: '',
    breadcrumb: true,
    children: [
      {
        id: '0901',
        parentId: '09',
        path: '/demo/index',
        component: 'demo/index',
        redirect: '',
        type: 2,
        title: '示例页',
        svgIcon: 'menu-example',
        icon: '',
        keepAlive: false,
        hidden: false,
        sort: 0,
        activeMenu: '',
        breadcrumb: false,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: true,
        alwaysShow: false
      }
    ],
    status: 1,
    roles: ['role_admin', 'role_user'],
    permissions: [],
    affix: true,
    alwaysShow: false
  },
  {
    id: '10',
    parentId: '',
    path: '/multilevel',
    component: 'Layout',
    redirect: '/multilevel/index/user',
    type: 1,
    title: '多级缓存',
    svgIcon: 'menu-user',
    icon: 'icon-list',
    keepAlive: false,
    hidden: false,
    sort: 11,
    activeMenu: '',
    breadcrumb: true,
    children: [
      {
        id: '1001',
        parentId: '10',
        path: '/multilevel/index',
        component: 'multilevel/main/index',
        redirect: '',
        type: 1,
        title: '页面',
        svgIcon: '',
        icon: 'icon-list',
        keepAlive: true,
        hidden: true,
        sort: 0,
        activeMenu: '',
        breadcrumb: false,
        children: [
          {
            id: '100101',
            parentId: '1001',
            path: '/multilevel/index/user',
            component: 'multilevel/main/user/index',
            redirect: '',
            type: 2,
            title: '个人中心',
            svgIcon: '',
            icon: 'icon-list',
            keepAlive: false,
            hidden: true,
            sort: 0,
            activeMenu: '/multilevel',
            breadcrumb: true,
            status: 1,
            roles: ['role_admin', 'role_user'],
            permissions: [],
            affix: true,
            alwaysShow: false
          },
          {
            id: '100102',
            parentId: '1001',
            path: '/multilevel/index/notice',
            component: 'multilevel/main/notice/index',
            redirect: '',
            type: 2,
            title: '消息通知',
            svgIcon: '',
            icon: 'icon-list',
            keepAlive: true,
            hidden: true,
            sort: 0,
            activeMenu: '/multilevel',
            breadcrumb: true,
            status: 1,
            roles: ['role_admin', 'role_user'],
            permissions: [],
            affix: true,
            alwaysShow: false
          }
        ],
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: true,
        alwaysShow: false
      }
    ],
    status: 1,
    roles: ['role_admin', 'role_user'],
    permissions: [],
    affix: true,
    alwaysShow: false
  },
  {
    id: '11',
    parentId: '',
    path: '/about',
    component: 'Layout',
    redirect: '/about/index',
    type: 1,
    title: '关于我们',
    svgIcon: '',
    icon: '',
    keepAlive: false,
    hidden: false,
    sort: 12,
    activeMenu: '',
    breadcrumb: true,
    children: [
      {
        id: '1101',
        parentId: '11',
        path: '/about/index',
        component: 'about/index',
        redirect: '',
        type: 2,
        title: '关于我们',
        svgIcon: 'menu-about',
        icon: '',
        keepAlive: false,
        hidden: false,
        sort: 0,
        activeMenu: '',
        breadcrumb: false,
        status: 1,
        roles: ['role_admin', 'role_user'],
        permissions: [],
        affix: true,
        alwaysShow: false
      }
    ],
    status: 1,
    roles: ['role_admin', 'role_user'],
    permissions: [],
    affix: true,
    alwaysShow: false
  },
  {
    id: '12',
    parentId: '',
    path: 'https://gitee.com/lin0716/gi-demo',
    component: 'https://gitee.com/lin0716/gi-demo',
    redirect: '',
    type: 2,
    title: '项目地址',
    svgIcon: 'menu-gitee',
    icon: '',
    keepAlive: false,
    hidden: false,
    sort: 13,
    activeMenu: '',
    breadcrumb: true,
    status: 1,
    roles: ['role_admin', 'role_user'],
    permissions: [],
    affix: true,
    alwaysShow: false
  }
]
