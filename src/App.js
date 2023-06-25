import React from "react";
import "./App.css";
import Header from "./hoc/Header/header";
import Main from "./hoc/main/main";
import Footer from "./hoc/Footer/Footer";
import "./Responsive.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";

let results = [];

class App extends React.Component {
  state = {
    results: [],
    items: [],
    daywordlatin: "",
    latin: true,
    search: [],
  };

  componentDidMount() {
    axios
      .get(`https://sozlik.abbc.uz/api/words?limit=1000&page=1`)
      .then((res) => {
        this.setState({
          items: res.data.data,
        });
      });
    axios.get(`https://sozlik.abbc.uz/api/wordsday`).then((res) => {
      this.setState({
        daywordlatin: res.data.data,
      });
    });
  }

  langChangeHandler() {
    this.setState({
      latin: !this.state.latin,
    });
  }

  inputSearchHandler(e) {
    results.length = 0;
    this.setState({
      results: results,
    });
    // eslint-disable-next-line array-callback-return
    this.state.items.map((item) => {
      if (this.state.latin) {
        for (let i = 0; i <= e.target.value.split(" ").length; i++) {
          if (item.latin[i] === e.target.value[i]) {
            results.push(item);
            this.setState({
              results: results,
            });
          }
        }
      } else {
        for (let i = 0; i <= e.target.value.split(" ").length; i++) {
          if (item.kiril[i] === e.target.value[i]) {
            results.push(item);
            this.setState({
              results: results,
            });
          }
        }
      }
      if (e.target.value === "A" && item.latin[0] === "А") {
        results.push(item);
        this.setState({
          results: results,
        });
      }
    });
  }

  letterClickHandler(e) {
    document.querySelector(".main").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
    axios
      .get(
        `https://sozlik.abbc.uz/api/search?search=${
          e.target.textContent.split("")[0]
        }&limit=1000&page=1`
      )
      .then((res) => {
        this.setState({
          search: res.data.data,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route
            path={"/*"}
            element={
              <div className="wrapper">
                <Header
                  langChangeHandler={this.langChangeHandler.bind(this)}
                  latin={this.state.latin}
                  result={this.state.results}
                  searchHandler={this.inputSearchHandler.bind(this)}
                />
                <Main
                  search={this.state.search}
                  letterClickHandler={this.letterClickHandler.bind(this)}
                  latin={this.state.latin}
                  data={this.state.daywordlatin}
                  items={this.state.items}
                />
                <Footer latin={this.state.latin} />
              </div>
            }
          />
          <Route
            path={"/admin/*"}
            element={
              <Login items={this.state.items} search={this.state.search} />
            }
          />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
