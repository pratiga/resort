import React, { Component } from "react";
import Title from "./Title.jsx";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
 
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free FaCocktail",
        info: "the notebook in which a referee writes the names of players who are cautioned for foul play.his name went into the book for a foul on Smyth",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "the notebook in which a referee writes the names of players who are cautioned for foul play.his name went into the book for a foul on Smyth",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "the notebook in which a referee writes the names of players who are cautioned for foul play.his name went into the book for a foul on Smyth",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "the notebook in which a referee writes the names of players who are cautioned for foul play.his name went into the book for a foul on Smyth",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item,index) => {
            return(
             <article key={index} className="services">
             <span>{item.icon}</span>
             <h6>{item.title}</h6>
             <p>{item.info}</p>
             </article>
            );
          })}
        </div>
      </section>
    );
  }
}
