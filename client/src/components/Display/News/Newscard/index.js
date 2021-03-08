import "./style.css";

const Newscard = ({ data, localeDate }) => {
  return (
    <a
      className="no-text-decoration font-m font-primary"
      href={data.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <article className="newscard flex">
        <div className="img-container">
          <img src={data.image} alt={`${data.headline}`} />
        </div>

        <div className="newscard-content flex-col">
          <section>
            <h3 className="font-m" key={data.url}>
              {data.headline}
            </h3>
          </section>
          <section>
            <p className="font-secondary">
              {data.source} | {localeDate(data.datetime)}
            </p>
          </section>
          <section>
            <p className="font-primary">{data.summary}</p>
          </section>
        </div>
      </article>
    </a>
  );
};

export default Newscard;
