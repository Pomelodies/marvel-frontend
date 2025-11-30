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
              setCurrentSkip(page * 100 - 100);
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
