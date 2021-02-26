import "./styles.css";

const Newscard = ({ data }) => {
  const unixToLocaleDate = (unix_datetime) => {
    let date = new Date(unix_datetime * 1000);
    return date.toLocaleString([], {
      weekday: "short",
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <article className="newscard-wrapper">
      <div className="newscard-image">
        <img src={data.img} alt="news cover" />
      </div>
      <div className="newscard-content">
        <section className="newscard-headline">
          <a href={data.source}>
            <h1 key={data.url}>{data.headline}</h1>
          </a>
        </section>
        <section className="newscard-meta">
          <p>
            {data.source} | {unixToLocaleDate(data.datetime)}
          </p>
        </section>
        <section className="newscard-summary">
          <p>{data.summary}</p>
        </section>
      </div>
    </article>
  );
};

export default Newscard;
