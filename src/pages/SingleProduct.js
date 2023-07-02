import styled from 'styled-components'
import { images, colors, sizes } from '../data';
import { IoIosArrowDown } from 'react-icons/io';
import { AiFillStar, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { useState } from 'react';

const Container = styled.div`
    background-image: linear-gradient(to bottom, var(--primary-color) 0 70%, var(--second-color) 70% 100%);
    display: flex;
    padding: 0 100px;
    overflow: auto;
    min-height: calc(100vh - 80px);
    @media (max-width: 661px) {
        padding: 0;
        overflow: hidden;
    }
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    width: 65%;
    height: 75%;
    background-color: rgba(188, 188, 188, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 40px;
    overflow-y: auto;
    @media (max-width: 1500px) {
        width: 100%;
    }
    @media (max-width: 1300px) {
        width: 100%;
        height: max-content;
        border-radius: 0;
    }
    @media (max-width:771px) {
        padding: 20px;
    }
   
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: end;
    justify-content: flex-start;
    gap:10px;
    @media (max-width: 1300px) {
        display: none;
    }
`;

const Image = styled.img`
    object-fit: contain;
`;


const CarouselImages = styled.div`

    border-radius: 10px;
    width: 80px;
    align-self: center;
    gap: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
    
    
`;

const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 80px;
    height: 80px;
    background-color: white;
    border-radius: 50%;
`;

const Logo = styled.span`
  font-size: 20px ;
  color: var(--second-color);
  position: relative;
  bottom: -15px;
  @media (max-width: 1400px) {
    bottom:-8px;
  }
`;

const Title = styled.span`
  font-size: 40px;
  color: white;
  font-weight: 500;
  @media (max-width: 1600px) {
    font-size: 35px;
  }
  @media (max-width: 1400px) {
    font-size: 30px;
  }
  
`;

const WrapperStar = styled.div`
 display: flex;
 align-items: flex-start;
 gap: 10px;
`;

const Stars = styled.div`
  /* Estilos para o elemento Stars */
`;

const Reviews = styled.div`
  font-size: 12px;
  color: var(--second-color);
`;

const Desc = styled.div`
  letter-spacing: 1px;
  text-align: justify;
  color: white;
  font-weight: 300;
`;

const WrapperColorsAndQnt = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-top: 30px;
    width: 100%;
    @media (max-width: 1600px) {
        margin-top: 0px;
    }
    @media (max-width: 1300px) {
        
        gap: 10px;
    }
`;

const LeftColor = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
`;

const TopColor = styled.span`
  font-size: 18px;
  color: white;
  font-weight: 500;
`;

const BottomColor = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CircleWrapper = styled.div`
    height: ${(props) => props.active == 'true' ? '27px' : '30px'};
    width: ${(props) => props.active == 'true' ? '27px' : '30px'};
    border-radius: 50%;
    border: ${(props) => props.active == 'true' ? '4px' : '1px'} solid white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CircleColor = styled.div`
    height: ${(props) => props.active == 'true' ? '100%' : '80%'};
    width:  ${(props) => props.active == 'true' ? '100%' : '80%'};
    border-radius: 50%;
    background-color:  ${(props) => props.color};
`;


const RightQnt = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
`;

const TopQnt = styled.span`
  font-size: 18px;
  color: white;
  font-weight: 500;
  align-self:center;
`;

const BottomQnt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 18px;
`;

const SpanQnt = styled.span`
  padding: 0 20px;
`;


const WrapperSize = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 10px;
`;

const TextSize = styled.span`
    color: white;
    font-weight: 500;
`;

const Sizes = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

`;

const BoxSize = styled.div`
  width: 60px;
  padding: 5px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  color: ${(props) => props.active == 'true' ? 'white' : '#848383'};
  border: 2px solid ${(props) => props.active == 'true' ? 'white' : '#848383'};
`;

const TextBoxSize = styled.span`
  
`;

const WrapperPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  gap: 40px;
  margin-top: 20px;
`;

const Price = styled.span`
    font-size: 40px;
    color: white;
    font-weight: 600;
    @media (max-width: 1400px) {
        font-size: 30px;
    }
`;

const ButtonCart = styled.button`
    width: 70%;
    background-color: white;
    border: none;
    padding: 10px 0;
    letter-spacing: 1px;
    color: var(--second-color);
    font-weight: bold;
    cursor: pointer;
`;


const ImageCircle = styled.img``;

const WrapperProduct = styled.div`
    display: flex;
    gap: 10px;
    @media (max-width:1100px) {
        flex-direction: column;
    }
`;

const WrapperContent = styled.div`
    display: flex;
    flex-direction:column;
    gap: 10px;
    width: 100%;
    
`;


const WrapperImage = styled.div`
   
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
    display: none;
    @media (max-width: 1300px) {
        display: flex;
    }

`;

const ImageProduct = styled.img`
    @media (max-width: 500px) {
        height: 300px;
        width: 300px;
    }
`;

const WrapperCarrousel = styled.div`
    display: flex;
    gap: 3px;
`;

const ImageItemCarrousel = styled.img`
    @media (max-width: 500px) {
        height: 72px;
        width: 72px;
    }
`;

const WrapperInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`;

const BoxImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);;
`;

export default function SingleProduct() {

    return (
        <Container>
            <Left>
                <Box>
                    <Logo>YETI</Logo>
                    <WrapperProduct>
                        <WrapperImage>
                            <BoxImage>
                                <ImageProduct src={images[0].image} width={400} height={400} alt="" />
                            </BoxImage>
                            <WrapperCarrousel>
                                {images.map((item, key) => (
                                    <BoxImage key={key}>
                                        <ImageItemCarrousel src={item.image} width={98} height={98} />
                                    </BoxImage>
                                ))}
                            </WrapperCarrousel>
                        </WrapperImage>
                        <WrapperInfo>
                            <Title>Backpack Impermeable</Title>
                            <WrapperStar>
                                <Stars>
                                    <AiFillStar color="var(--second-color)" />
                                    <AiFillStar color="var(--second-color)" />
                                    <AiFillStar color="var(--second-color)" />
                                    <AiFillStar color="var(--second-color)" />
                                    <AiFillStar color="var(--second-color)" />
                                </Stars>
                                <Reviews>540 Reviews</Reviews>
                            </WrapperStar>
                            <Desc>Lorem ipsum dolor sit amet. Ea laborum corrupti est omnis internos qui quas deserunt hic architecto mollitia. Et atque sapiente id voluptas sequi sed dolorum itaque ut adipisci odit ut fugiat harum ut consequatur velit a accusantium ipsa. Aut necessitatibus.</Desc>
                            <WrapperContent>
                                <WrapperColorsAndQnt>
                                    <LeftColor>
                                        <TopColor>Colors&nbsp;&nbsp;&nbsp;Granite&nbsp;&nbsp;&nbsp;White</TopColor>
                                        <BottomColor>
                                            {colors.map((item, key) => (
                                                <CircleWrapper key={key} active={item.active}>
                                                    <CircleColor color={item.color} active={item.active}></CircleColor>
                                                </CircleWrapper>
                                            ))}
                                        </BottomColor>
                                    </LeftColor>
                                    <RightQnt>
                                        <TopQnt>Quantity</TopQnt>
                                        <BottomQnt>
                                            <AiOutlinePlusCircle size={24} style={{ cursor: 'pointer' }} />
                                            <SpanQnt>1</SpanQnt>
                                            <AiOutlineMinusCircle size={24} style={{ cursor: 'pointer' }} />
                                        </BottomQnt>
                                    </RightQnt>
                                </WrapperColorsAndQnt>
                                <WrapperSize>
                                    <TextSize>SIZE: </TextSize>
                                    <Sizes>
                                        {sizes.map((item, key) => (
                                            <BoxSize key={key} active={item.active}>
                                                <TextBoxSize>{item.text}</TextBoxSize>
                                            </BoxSize>
                                        ))}
                                    </Sizes>
                                </WrapperSize>
                            </WrapperContent>
                            <WrapperPrice>
                                <Price>R$150.00</Price>
                                <ButtonCart>Add to Cart</ButtonCart>
                            </WrapperPrice>
                        </WrapperInfo>
                    </WrapperProduct>

                </Box>
            </Left>
            <Right>
                <Image src={images[0].image} width={600} height={600} alt="" />
                <CarouselImages>
                    {images.map((item, key) => (
                        <Circle key={key}>
                            <ImageCircle src={item.image} height={60} width={60}></ImageCircle>
                        </Circle>
                    ))}
                    <IoIosArrowDown size={20} color='white' style={{ marginTop: '10px', cursor: "pointer" }} />
                </CarouselImages>

            </Right>
        </Container>
    )
}
