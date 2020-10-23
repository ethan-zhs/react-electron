import * as React from 'react'
import Sidebar from '@components/Sidebar'

import '../../theme/style/global.less'

class Layout extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        const { location } = this.props
        return (
            <div className="layout">
                <Sidebar location={location} />
                <div className="container">{this.props.children}</div>
            </div>
        )
    }
}

export default Layout
