import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Editor from "./components/Editor";
import AddIcon from "@material-ui/icons/Add";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import Composer from "./components/Composer";

import Results from "./components/Results";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

class App extends Component {
  state = {
    display: 0
  };
  handleNavigate = () => {
    alert();
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col bg-dark">
            <nav class="navbar navbar-dark bg-dark">
              <nav class="navbar navbar-light bg-light">myApp</nav>
            </nav>
          </div>
        </div>
        <div className="row">
          <div style={{ height: 700 }} className="col-sm-1 bg-secondary">
            <SideNav
              onSelect={selected => {
                if (selected === "Create composer") {
                  this.setState({ display: 0, expanded: false });
                } else {
                  this.setState({ display: 1, expanded: false });
                }
              }}
              expanded={this.state.expanded}
              onToggle={expanded => {
                this.setState({ expanded });
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="Create composer">
                <NavItem eventKey="Create composer">
                  <NavIcon>
                    <AddIcon />
                  </NavIcon>
                  <NavText>Create composer</NavText>
                </NavItem>
                <NavItem eventKey="Results">
                  <NavIcon>
                    <ArtTrackIcon />
                  </NavIcon>
                  <NavText>Results</NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
          </div>
          <div className="col-sm-11 bg-secondary">{this.show()}</div>
        </div>
      </div>
    );
  }

  show = () => {
    if (this.state.display === 0) {
      return <Editor />;
    } else {
      return <Results />;
    }
  };
}

export default App;
