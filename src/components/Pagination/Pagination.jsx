import "./pagination.css";

const Pagination = ({ setCurrentSkip, totalElement, limit }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalElement / limit); i++) {
    pages.push(i);
  }
  //   console.log(pages); tableau de 1 à 15

  return (
    <div className="pageNumber">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              if (index === 0) {
                setCurrentSkip(0);
              } else if (index === 1) {
                setCurrentSkip(100);
              } else if (index === 2) {
                setCurrentSkip(200);
              } else if (index === 3) {
                setCurrentSkip(300);
              } else if (index === 4) {
                setCurrentSkip(400);
              } else if (index === 5) {
                setCurrentSkip(500);
              } else if (index === 6) {
                setCurrentSkip(600);
              } else if (index === 7) {
                setCurrentSkip(700);
              } else if (index === 8) {
                setCurrentSkip(800);
              } else if (index === 9) {
                setCurrentSkip(900);
              } else if (index === 10) {
                setCurrentSkip(1000);
              } else if (index === 11) {
                setCurrentSkip(1100);
              } else if (index === 12) {
                setCurrentSkip(1200);
              } else if (index === 13) {
                setCurrentSkip(1300);
              } else if (index === 14) {
                setCurrentSkip(1400);
              }
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
