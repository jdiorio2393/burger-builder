import React, { Component } from 'react'
import Aux from '../../hoc/auxiliary'
import classes from './layout.css'
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    
    state = {
        showSideDrawer: false
    }

    sideDrawerCLosedHandler = () => {
       this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
           return {showSideDrawer: !prevState.showSideDrawer}
    }) 
}

    render() {
        return(
    <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
        closed={this.sideDrawerCLosedHandler}
        open={this.state.showSideDrawer}/>
        <main className={classes.content}>
            {this.props.children}
        </main>
    </Aux>
        )
    }
}
export default Layout;