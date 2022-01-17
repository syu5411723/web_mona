
import styled from 'styled-components'
import { Sec01Title, Sec01Content, Sec01Button, Sec01Image } from "../../../atoms/main/Home/Sec01/index"

const RightWrapper = styled.div``
const LeftWrapper = styled.div``


export const Sec01 = () => {
    return (
        <>
            <RightWrapper>
                <Sec01Title />
                <Sec01Content />
                <Sec01Button />
            </RightWrapper>
            <LeftWrapper>
                <Sec01Image />
            </LeftWrapper>
        </>
    )
}
