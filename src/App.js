import React from "react";
// import logo from './logo.svg';
import './App.css';
import {ThemeContext, themes} from "./theme-context";
import ThemedButton from "./themed-button";

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div className="App">
        <header className="App-header">
        <ThemeContext.Provider value={this.state.theme}>
            <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <ThemedButton /> 
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
