import { DefaultContainer } from "shared/DefaultContainer";
import { COLORS } from "shared/enums";
import styled from "styled-components";

export const Background = styled(DefaultContainer).attrs({
  $flexDirection: "column",
  $alignItems: "center",
  $justifyContent: "flex-start",
})`
  min-height: 100vh;

  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const Container = styled(DefaultContainer).attrs({
  $flexDirection: "column",
  $alignItems: "center",
  $maxWidth: "393px",
  $gap: "20px",
})`
  padding: 15px 24px;

  @media (min-width: 425px) {
    padding: 35px 44px;
  }

  @media (min-width: 600px) {
    max-width: 500px;

    padding: 20px 25px;

    border-radius: 10px;
    border: 1px solid ${COLORS.grey_ADADAD};
  }

  @media (min-width: 768px) {
    max-width: 600px;

    padding: 40px 45px;

    gap: 30px;
  }

  @media (min-width: 1024px) {
    max-width: 789px;

    padding: 88px 95px;

    gap: 50px;

    margin-bottom: 50px;
  }
`;

export const Header = styled(DefaultContainer).attrs({
  $padding: "20px",
  $alignItems: "center",
  $justifyContent: "space-between",
  $flexDirection: "column",
  $gap: "30px",
})`
  @media (min-width: 500px) {
    flex-direction: row;
    gap: 0;
  }

  @media (min-width: 768px) {
    padding: 55px 75px 35px 75px;
  }
`;

export const Logo = styled.img`
  height: 36px;
  width: auto;
  align-self: flex-start;

  @media (min-width: 1024px) {
    width: 228px;
    height: 62.36px;
  }
`;

export const Link = styled.a<{ $active?: boolean }>`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;

  color: ${({ $active }) =>
    $active ? COLORS.brown_A04A4A : COLORS.black_313131};

  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const LinksContainer = styled(DefaultContainer).attrs({
  $maxWidth: "520px",
  $margin: "0 20px",
  $alignItems: "center",
  $justifyContent: "center",
  $gap: "10px",
})`
  @media (min-width: 350px) {
    gap: 20px;
  }

  @media (min-width: 600px) {
    justify-content: space-between;
  }

  @media (min-width: 600px) {
    gap: 40px;
  }
`;

export const H2 = styled.p`
  align-self: flex-start;

  font-family: Lato;
  font-size: 13px;
  font-weight: 400;
  line-height: 19.77px;
  text-align: left;

  color: ${COLORS.black_313131};

  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 29.94px;
  }
`;

export const LogOut = styled.button`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;

  color: ${COLORS.black_313131};

  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  border: 0;
  background-color: transparent;
`;
