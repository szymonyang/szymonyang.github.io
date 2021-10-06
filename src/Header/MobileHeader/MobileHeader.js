import React, { Component } from "react";
import PropTypes from "prop-types";

import { Icon, Container, Menu, Sidebar } from "semantic-ui-react";

import { Media } from "../../MediaProfile";

import "./mobilehandler.css";

export default class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            // inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item
              onClick={this.handleSidebarHide}
              as="a"
              style={{
                display: "inline-block",
                width: "100%",
              }}
            >
              <Icon style={{ float: "left", margin: 0 }} name="close" />
            </Menu.Item>

            <Menu.Item as="a" href="mailto:xenfa292k@relay.firefox.com">
              <Icon name="mail" />
              Email
            </Menu.Item>
            <Menu.Item
              as="a"
              href="https://github.com/szymonyang"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" />
              GitHub
            </Menu.Item>
            <Menu.Item
              as="a"
              href="https://linkedin.com/in/jianwenyeung/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="linkedin" />
              LinkedIn
            </Menu.Item>
            <Menu.Item
              as="a"
              href="https://dribbble.com/szymonyang"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="dribbble" />
              Dribbble
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Container>
              <Menu secondary borderless size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item header></Menu.Item>
              </Menu>
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};