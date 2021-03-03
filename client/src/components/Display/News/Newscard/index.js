import "./style.css";

const Newscard = ({ data }) => {
  const unixToLocaleDate = (unix_datetime) => {
    let date = new Date(unix_datetime);
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
    <article className="newscard-wrapper flex">
      <div>
        <img src={data.image} alt={`${data.headline}`} />
      </div>

      <div className="newscard-content flex-col">
        <section className="newscard-section">
          <a
            className="no-text-decoration font-m font-primary"
            href={data.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <h3 className="font-sm" key={data.url}>
              {data.headline}
            </h3>
          </a>
        </section>
        <section className="newscard-section">
          <p className="font-secondary">
            {data.source} | {unixToLocaleDate(data.datetime)}
          </p>
        </section>
        <section className="newscard-section">
          <p>{data.summary}</p>
        </section>
      </div>
    </article>
  );
};

export default Newscard;
