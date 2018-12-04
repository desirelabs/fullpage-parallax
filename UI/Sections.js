import styled from "styled-components";

export const Title = styled.h2`
  width: 100%;
  margin: 0 0 15px;
  font-family: panton, sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
  color: #000;
  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

export const ColoredSeparator = styled.div`
  width: 81px;
  height: 8px;
  background-color: green;
`;

export const Description = styled.p`
  width: 100%;
  font-family: panton, sans-serif;
  font-size: 16px;
  margin: 20px 0 0;
  font-weight: normal;
  line-height: normal;
  color: #000;
  @media (min-width: 1024px) {
    font-size: 20px;
    margin: 30px 0 0;
  }
`;

export const SectionWrapper = styled.section.attrs({
  className: "section"
})``;

const Pan = styled.div`
  position: relative;
`;

export const LeftPan = styled(Pan)``;

const PanInner = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  min-height: 100%;
`;

export const LeftPanInner = styled(PanInner)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100%;
  max-width: 480px;
  margin: auto;
`;

export const RightPan = styled(Pan)``;

export const RightPanInner = styled(PanInner)``;

export const Section = styled.div`
  display: grid;
  min-height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 100vw 1fr;
  ${LeftPan} {
    order: 1;
  }
  ${RightPan} {
    order: 0;
  }
  @media (min-width: 512px) {
    grid-template-columns: 1fr 100vh;
    grid-template-rows: 1fr;
    ${LeftPan} {
      order: 0;
    }
    ${RightPan} {
      order: 1;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 100vw 1fr;
    ${LeftPan} {
      order: 1;
    }
    ${RightPan} {
      order: 0;
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 1fr;
    ${LeftPan} {
      order: 0;
    }
    ${RightPan} {
      order: 1;
    }
  }
  @media (min-width: 1440px) {
    grid-template-columns: auto 100vh;
    grid-template-rows: 1fr;
  }
`;
