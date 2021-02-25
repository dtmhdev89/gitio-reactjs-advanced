import React from "react";
import {ThemeContext} from "./theme-context";

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;

    return (
      <button {...props} style={{backgroundColor: theme.background, width: 100, height: 50}} />
    )
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
