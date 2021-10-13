import React from "react";
import styled from "styled-components";
import Color from "color";
import { Flex, FlexHVC } from "../../../components/common/styles";
import { getIcon } from "../../../components/common/icons";

const SectionHolder = styled.div`
  border: 1px solid ${(props) => Color(props.theme.fontColor).alpha(0.25).toString()};
  border-radius: 5px;
  padding: 15px 10px 10px 10px;
  position: relative;

  .header {
    position: absolute;
    top: -10px;
    left: 8px;
    background: ${(props) => props.theme.backgroundColor};
    padding: 0 5px;
    font-weight: bold;
    color: ${(props) => props.theme.primaryColor};

    svg {
      font-size: 0.8rem;
    }
  }
`;

const SectionIntroHolder = styled(SectionHolder)`
  padding-top: 20px;

  .header {
    top: -20px;
    left: 0;
    background: ${(props) => props.theme.backgroundColor};
    margin-left: 5px;
    padding: 0 5px;
    background: ${(props) => props.theme.backgroundColor};

    .header__title {
      margin: 0;
      color: ${(props) => props.theme.primaryColor};
    }
  }

  .social-icons {
    position: absolute;
    top: -12px;
    right: 10px;
    font-size: 18px;
    column-gap: 5px;

    svg {
      color: ${(props) => props.theme.primaryColor};
      background-color: ${(props) => props.theme.backgroundColor};
    }
  }
`;

export function ModernHeader({ styles, title, icon, children }: any) {
  return (
    <SectionHolder style={styles}>
      <FlexHVC className="header" cGap="5px">
        {icon}
        <div className="header__title">{title}</div>
      </FlexHVC>
      {children}
    </SectionHolder>
  );
}

export function ModernHeaderIntro({ styles, title, icons, children }: any) {
  return (
    <SectionIntroHolder style={styles}>
      <FlexHVC className="header">
        <h1 className="header__title">{title}</h1>
      </FlexHVC>
      <Flex className="social-icons">
        {Object.entries(icons)
          .filter((value) => typeof value[1] !== "function")
          .map((icon: any) => (
            <a href={icon[1]} key={icon[1]}>
              {getIcon(icon[0])}
            </a>
          ))}
      </Flex>
      {children}
    </SectionIntroHolder>
  );
}
