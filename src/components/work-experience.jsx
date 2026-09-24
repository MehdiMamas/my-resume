import { format } from '../utils';

export default function WorkExperience({ data }) {
  const { title, list } = data;
  if (!list || list.length === 0) return null;

  return (
    <section className="work-experience">
      <h2>{title}</h2>
      <ul>
        {list.map(({ company, jobTitle, location, date, description }) => (
          <li key={company}>
            <div className="header sm-border-bottom">
              <h4>
                {jobTitle} <br />
                {location ? `${company}, ${location}` : company}
              </h4>

              <span className="date">
                {format(date.start)} - {date.end === 'Present' ? date.end : format(date.end)}
              </span>
            </div>

            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
