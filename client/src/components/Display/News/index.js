import Newscard from "./Newscard";
import "./style.css";

const News = ({ data, localeDate }) => {
  return (
    <section id="news" className="display-section">
      <h2 className="font-m section-title">Recent News</h2>
      {data.length > 0 ? (
        data.map((item, i) => {
          return <Newscard key={i} data={item} localeDate={localeDate} />;
        })
      ) : (
        <div id="empty-news" className="flex justify-center">
          <p className="font-sm text-center">No recent news found.</p>
        </div>
      )}
    </section>
  );
};

export default News;
