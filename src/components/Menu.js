import styled from 'styled-components';
import {BsCart3} from 'react-icons/bs'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
    height: 80px;
    background-color: var(--primary-color);
    @media (max-width:991px) {
        padding: 0 20px;
    }
`;

const Logo = styled.div`
    color: white;
    font-size: 30px;
    letter-spacing: 8px;
`;

const List = styled.div`
    display: flex;
    color: #fff;
    gap: 20px;
    font-size: 18px;
`;

const Item = styled.div`
    font-weight: 400;
    letter-spacing: 2px;
    cursor: pointer;
    @media (max-width:661px) {
       display: none;
       &:last-child{
        display: inline;
       }
    }
`;

export default function Menu() {
  return (
    <Container>
        
        <Logo>YETI</Logo>
      
        <List>
            <Item>Home</Item>
            <Item>Shop</Item>
            <Item>Cupons</Item>
            <Item>
                <BsCart3 color='#ffffff' size={20}/>
            </Item>
        </List>
    </Container>
  )
}
