import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  top: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
  min-height: 0;
  display: block;
  background: url(http://lorempicsum.com/futurama/600/400/4);
  background-position: center 0;
  background-size: cover;
  transition: transform 700ms ease;
  ${props => `z-index: -${props.index}`};
  backface-visibility: hidden;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(255, 255, 255, 0) 41%,
      rgba(255, 255, 255, 0) 82%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  @media (min-width: 1024px) and (max-width: 767px) {
    ${props =>
      props.isPrevious
        ? "transform: translateX(0px) translateY(0px)"
        : "transform: translateX(0px) translateY(-343px)"};
  }
  @media (min-width: 1024px) {
    ${props =>
      props.isPrevious
        ? "transform: translateX(0px) translateY(0px)"
        : "transform: translateX(0px) translateY(-343px)"};
  }
`;

export default class extends React.Component {
  render() {
    const { src, index, current } = this.props;
    return (
      <Wrapper
        background={src}
        index={index}
        isCurrent={index === current}
        isPrevious={index <= current}
      />
    );
  }
}
