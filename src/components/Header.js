import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Header() {
    return (
        <Container>
            <a >
                <img src="/images/logo.svg"/>
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model Y</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu />
            </RightMenu>
            <BurgerNav>
                <CloseWrapper>
                    <CustomClose/>
                </CloseWrapper>   
                <li><a href="#">Model S</a></li>
                <li><a href="#">Solar Roof</a></li>
                <li><a href="#">Solar Panels</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Find Us</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header
const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media (max-width: 768px) {
        display: none;
    }

`
const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        marigin-right: 10px;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;

`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;

`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom:0;
    right:0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style:none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgb(0,0,0,.2);

        a {
            font-weight: 600;

        }
    }
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
