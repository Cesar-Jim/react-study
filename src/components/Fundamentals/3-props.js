import React from 'react';

// Newspaper is the main Functional Component
function Newspaper() {
  const news = 'Coronavirus Hits Hard!';
  const newsTwo = 'The Oil Prices Battle';
  const newsData = {
    place: 'Mexico',
    time: '2pm CDT',
    reporter: 'Mike Smith'
  };

  return (
    <div>
      <Headline value={news} />
      <HeadlineTwo value={newsTwo} />
      <Footer
        place={newsData.place}
        time={newsData.time}
        reporter={newsData.reporter}
      />
    </div>
  );
}

// Extract data using the props object
function Headline(props) {
  return <h2>{props.value}</h2>;
}

// Extract data by destructuring props
function HeadlineTwo({ value }) {
  return <h2>{value}</h2>;
}

function Footer({ place, time, reporter }) {
  return (
    <p>
      {place}, {time} - by: {reporter}
    </p>
  );
}

export default Newspaper;
