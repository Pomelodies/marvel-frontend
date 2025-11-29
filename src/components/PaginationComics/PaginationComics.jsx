const PaginationComics = ({ setSkipComics, totalElement }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalElement / 100); i++) {
    pages.push(i);
  }
  //   console.log(pages); tableau de 1 à 474
  return (
    <div>
      {pages.map((page, index) => {
        return <button key={index}>{page}</button>;
      })}
    </div>
  );
};

export default PaginationComics;
