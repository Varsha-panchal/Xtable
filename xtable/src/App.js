
import React, { useState } from 'react';

const XTable = () => {
  const initialData = [
    { date: '2022-09-01', views: 100, article: 'Article 1' },
    { date: '2023-09-01', views: 100, article: 'Article 1' },
    { date: '2023-09-02', views: 150, article: 'Article 2' },
    { date: '2023-09-02', views: 120, article: 'Article 3' },
    { date: '2020-09-03', views: 200, article: 'Article 4' },
  ];

  const [data, setData] = useState(initialData);
  const [sortBy, setSortBy] = useState(null);

  const sortTable = (sortField) => {
    let sortedData;

    if (sortField === 'date') {
      sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date) || b.views - a.views);
    } else if (sortField === 'views') {
      sortedData = data.sort((a, b) => b.views - a.views || new Date(b.date) - new Date(a.date));
    }

    setData([...sortedData]);
    setSortBy(sortField);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => sortTable('date')}>Sort by Date</button>
      <button onClick={() => sortTable('views')}>Sort by Views</button>
    </div>
  );
};

export default XTable;
