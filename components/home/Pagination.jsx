"use client";
const Pagination = ({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="join">
      <button
        className="join-item btn"
        onClick={() => {
          currentPage !== 1 && setCurrentPage(currentPage - 1);
        }}
      >
        «
      </button>
      <button className="join-item btn">Page {currentPage}</button>
      <button
        className="join-item btn"
        onClick={() => {
          currentPage !== pages.length && setCurrentPage(currentPage + 1);
        }}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
