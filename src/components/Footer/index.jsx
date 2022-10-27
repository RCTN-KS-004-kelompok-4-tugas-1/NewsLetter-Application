import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--blue-3)',
        color: 'white',
      }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center text-center p-5 flex-wrap">
        <h4>
          <span style={{ fontWeight: '700' }}>N E W S </span> by Team 4
        </h4>
        <p>
          This project was made for Hacktiv8 Bootcamp X Kampus Merdeka. This
          website is a Newsletter application, which data are shown from newsApi
        </p>
        <p>This Website made by : </p>
        <nav>
          <a
            href="https://www.linkedin.com/in/afira-rolobessy-b12387221/"
            className="link-light"
          >
            Afira Rolobessy
          </a>
          &nbsp;·&nbsp;
          <a
            href="https://www.linkedin.com/in/oriastanjung/"
            className="link-light"
          >
            O. Riastanjung
          </a>
          &nbsp;·&nbsp;
          <a
            href="https://www.linkedin.com/in/tata-sulysta-1815821a2/"
            className="link-light"
          >
            Tata Sulysta
          </a>
        </nav>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        &#169; {new Date().getFullYear()} Copyright Team 4
      </div>
    </footer>
  );
}

export default Footer;
