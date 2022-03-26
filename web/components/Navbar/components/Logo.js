import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.img`
  display: block;
  width: 125px;
  height: 50px;
  display: ${(props) => (props.mobile ? "block" : "none")};
  margin: auto;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 630px) {
    display: flex;
  }
`;

function Logo({ mobile = false }) {
  return (
    <Link href="/">
      <Container
        src="/static/images/LOGO.png"
        alt="Union Gables Inn Logo"
        mobile={mobile}
      />
    </Link>
  );
}

export default Logo;
