import Newscard from "../Newscard";

const News = ({ data }) => {
  return (
    <section className="news section">
      <h2>News</h2>
      {data &&
        data.map((item, i) => {
          return <Newscard key={i} data={item} />;
        })}
    </section>
  );
};

export default News;
