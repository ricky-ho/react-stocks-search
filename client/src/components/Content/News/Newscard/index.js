import { getRelativeTime } from "../../../../utils/date";
import fallBackImage from "../../../../images/unavailable-image.jpg";
import "./style.css";

const Newscard = ({ article }) => {
  return (
    <article className="newscard">
      <a
        href={article.url}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={`View the full article, ${article.headline}`}
      >
        <div className="newscard-inner--wrapper">
          <div className="newscard-img--wrapper">
            <img
              src={article.image}
              alt={`${article.headline}`}
              className="newscard-img"
              onError={(e) => (e.target.src = fallBackImage)}
            />
          </div>

          <div className="newscard-content">
            <h3 key={article.url}>{article.headline || "--"}</h3>
            <p className="content-meta">
              {article.source || "--"} | {getRelativeTime(article.datetime)}
            </p>
            <p className="content-summary">{article.summary || "--"}</p>
          </div>
        </div>
      </a>
    </article>
  );
};

export default Newscard;
