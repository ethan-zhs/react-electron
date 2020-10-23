import { dialog } from 'electron'

export default [
    {
        label: '文件',
        submenu: [
            {
                label: '新建文件',
                click: function () {
                    dialog.showMessageBox({
                        type: 'info',
                        message: '嘿!',
                        detail: '你点击了新建文件！'
                    })
                }
            }
        ]
    },
    {
        label: '编辑',
        submenu: [
            {
                label: '剪切',
                role: 'cut'
            },
            {
                label: '复制',
                role: 'copy'
            },
            {
                label: '粘贴',
                role: 'paste'
            }
        ]
    },
    {
        label: '最小化',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
    }
]
