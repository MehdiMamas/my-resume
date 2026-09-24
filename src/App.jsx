import * as React from 'react';

import Details from './components/details';
import FullName from './components/full-name';
import Summary from './components/summary';
import Projects from './components/projects';
import WorkExperience from './components/work-experience';
import Education from './components/education';

import allData from './data';

// A4 page layout:
// ┌─────────────────┬───────────────────────┐
// │ column.left 30% │ column.right 70%      │
// │ contact         │ full name             │
// │ key skills      │ summary               │
// │ additional      │ work experience       │
// │ languages       │ projects              │
// │ interests       │ education             │
// │ certificates    │                       │
// │ publications    │                       │
// └─────────────────┴───────────────────────┘
//
// Resume data is pure JSON (src/data/resume.json). Icons are referenced by
// string keys (e.g. "book") and resolved via components/icon-map.jsx. This
// keeps the data layer safe for AI mutation (pypes AI resume editor edits
// this JSON shape; see frontend/lib/resume-schema.ts in pypes for the
// canonical schema).
export default function App() {
  const data = allData.resume;

  return (
    <>
      <div className="page">
        <div className="column left">
          <Details data={data.contact} />
          <Details data={data.keySkills} defaultIconKey="check-filled" />
          <Details data={data.additionalSkills} defaultIconKey="check" />
          <Details data={data.languages} defaultIconKey="comment" />
          <Details data={data.interests} />
          <Details data={data.certificates} defaultIconKey="newspaper" />
          <Details data={data.publications} />
        </div>

        <div className="column right">
          <FullName text={data.fullName} />
          <Summary data={data.summary} />
          <WorkExperience data={data.workExperience} />
          <Projects data={data.projects} />
          <Education data={data.education} />
        </div>
      </div>
    </>
  );
}
