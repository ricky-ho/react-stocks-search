import Newscard from "./Newscard";

const News = ({ data }) => {
  return (
    <section id="news" className="display-section">
      <h2 className="font-m section-title">News</h2>
      {data &&
        data.map((item, i) => {
          return <Newscard key={i} data={item} />;
        })}
    </section>
  );
};

export default News;
