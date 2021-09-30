import React, { useState } from "react";
import CurrencyArticleImage from "../resources/images/image-currency.jpg";
import PlaneImage from "../resources/images/image-restaurant.jpg";
import RestaurantImage from "../resources/images/image-plane.jpg";
import ConfettiImage from "../resources/images/image-confetti.jpg";

const Articles = () => {
  const [articles, setArticles] = useState([
    {
      title: "Title",
      author: "Author Name",
      texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor ut lorem id hendrerit. Proin elementum metus eu leo malesuada, et volutpat lectus suscipit. Aenean semper quam sit amet congue ornare.",
      image: CurrencyArticleImage
    },
    {
        title: "Title",
        author: "Author Name",
        texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor ut lorem id hendrerit. Proin elementum metus eu leo malesuada, et volutpat lectus suscipit. Aenean semper quam sit amet congue ornare.",
        image: PlaneImage
      },
      {
        title: "Title",
        author: "Author Name",
        texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor ut lorem id hendrerit. Proin elementum metus eu leo malesuada, et volutpat lectus suscipit. Aenean semper quam sit amet congue ornare.",
        image: RestaurantImage
      },
      {
        title: "Title",
        author: "Author Name",
        texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor ut lorem id hendrerit. Proin elementum metus eu leo malesuada, et volutpat lectus suscipit. Aenean semper quam sit amet congue ornare.",
        image: ConfettiImage
      }
  ]);

  return (
    <section className="articles" title="articles" id="articles">
      <div className="container container--pall">
        <div className="articles__title">
          <h2>Latest Articles</h2>
        </div>

        <div className="articles__cards">
            {articles.map((article) => (
                <div className="card">
                <div className="card__item">
                  <div className="card-image"><img src={article.image} /></div>
    
                  <div class="card-info">
                    <small>By {article.author}</small>
                    <h2 class="card-title">{article.title}</h2>
                    <p class="card-intro">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
