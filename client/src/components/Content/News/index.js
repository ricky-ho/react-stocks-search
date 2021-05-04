import Newscard from "./Newscard";
import "./style.css";

const News = ({ data: news }) => {
  return (
    <section id="news" className="display-section">
      <h2 className="">Recent News</h2>
      {news.length > 0 ? (
        news.map((article, index) => <Newscard key={index} article={article} />)
      ) : (
        <div id="empty-news">
          <p>No recent news found.</p>
        </div>
      )}
    </section>
  );
};

export default News;
