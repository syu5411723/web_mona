import styled from "styled-components"

const navData = ["新商品","ホーム","キッチン","オフィス","テック","ファッション","ポスター","キッズ","限定商品","セール"]

const NavItem  = styled.li`

`


export const HeaderNav = () => {
    return (
        <>
            {navData.map(data => <NavItem>{data}</NavItem>)}
        </>
    )
}
