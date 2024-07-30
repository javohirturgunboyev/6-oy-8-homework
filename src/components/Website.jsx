import React from 'react';

const websites = [
  { name: 'Google', url: 'https://www.google.com' },
  { name: 'Facebook', url: 'https://www.facebook.com' },
  { name: 'Twitter', url: 'https://www.twitter.com' },
  { name: 'Instagram', url: 'https://www.instagram.com' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com' },
  { name: 'GitHub', url: 'https://www.github.com' },
  { name: 'Reddit', url: 'https://www.reddit.com' },
  { name: 'Pinterest', url: 'https://www.pinterest.com' },
  { name: 'YouTube', url: 'https://www.youtube.com' },
  { name: 'Netflix', url: 'https://www.netflix.com' },
];

const Websites = () => {
  return (
    <div className="websites">
      <h2>Websites</h2>
      <ul>
        {websites.map((site, index) => (
          <li key={index}>
            <button onClick={() => window.location.href = site.url}>
              {site.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Websites;
