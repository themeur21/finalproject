import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactUS from "./containers/ContactUS";
import Post from "./containers/Post";
import video from "./containers/videos";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactUS} />
        <Route path="/post/:slug" component={Post} />
        <Route path="/videos" component={video} />

      </div>
    </Router>
  );
}

export default App;
