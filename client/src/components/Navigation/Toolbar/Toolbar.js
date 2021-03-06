import React from "react";
import styled from "styled-components";

import Logo from "../../Logo/Logo";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import NavigationItems from "../NavigationItems/NavigationItems";

const LogoWrapper = styled.div`
    height: 85%;
`;

const DesktopOnly = styled.div`
    @media (max-width: 499px) {
        & {
            display: none;
        }
    }
`;

const Toolbar = styled.header`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #555;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
    color: white;
`


const toolbar = props => (
    <Toolbar>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <LogoWrapper>
            <Logo />
        </LogoWrapper>
        <DesktopOnly>
            <NavigationItems />
        </DesktopOnly>
    </Toolbar>
)

export default toolbar;