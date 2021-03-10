import "./style.css";

const Newscard = ({ data, localeDate }) => {
  return (
    <a
      className="no-text-decoration font-m font-primary"
      href={data.url}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={`View the full article: ${data.headline}`}
    >
      <article className="newscard flex">
        <div className="img-container">
          <img src={data.image} alt={`${data.headline}`} />
        </div>

        <div className="newscard-content flex-col">
          <h3 className="font-sm" key={data.url}>
            {data.headline}
          </h3>

          <p className="font-secondary">
            {data.source} | {localeDate(data.datetime)}
          </p>

          <div>
            <p className="font-primary">{data.summary}</p>
          </div>
        </div>
      </article>
    </a>
  );
};

export default Newscard;
