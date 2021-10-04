import React, { Component } from "react";
import { Container, Menu, Visibility, Icon } from "semantic-ui-react";

import Bar from "../../Bar/Bar";
import { Media } from "../../MediaProfile";
import "./desktopheader.css";

const fixedMenuStyle = {
  backgroundColor: "rgba(192, 215, 207, 0.3)",
  paddingTop: "1.5em",
  // backgroundColor: "#fff",
  border: "none",
  boxShadow: "none",
};

export default class DesktopHeader extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => {
    this.setState({ fixed: true });
  };

  render() {
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Menu
            id="myMenu"
            borderless
            // style={fixedMenuStyle}
            // fixed={fixed ? "top" : null}
            size="huge"
          >
            <Container>
              <Menu.Item className="bar">
                <Bar />
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item className="onRight" as="a">
                  <Icon name="mail" />
                  Email
                </Menu.Item>
                <Menu.Item className="onRight" as="a">
                  <Icon name="github" />
                  GitHub
                </Menu.Item>
                <Menu.Item className="onRight" as="a">
                  <Icon name="linkedin" />
                  LinkedIn
                </Menu.Item>
                <Menu.Item className="onRight" as="a">
                  <Icon name="dribbble" />
                  Dribbble
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>
      </Media>
    );
  }
}
