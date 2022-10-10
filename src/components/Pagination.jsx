function Pagination({
  prevPage,
  currentPage,
  nextPage,
  changeCurrentPage,
  changeLimitProducts,
  toFirstPage,
  toPrevPage,
  toNextPage,
  toLastPage,
  totalPage
}) {
  return (
    <>
      <div className="pages">
        {currentPage > 1 ? (
          <div className="btn-prev">
            <button onClick={toFirstPage}>1</button>
            <button onClick={toPrevPage}>prev</button>
          </div>
        ) : (
          <div></div>
        )}
        {prevPage.slice(0, 1) > 1 ? (
          <div className="ellipsis">...</div>
        ) : (
          <div className="ellipsis"></div>
        )}
        {prevPage.map((item, index) => (
          <button className="pages" onClick={() => changeCurrentPage(item)}>
            {item}
          </button>
        ))}
        <button className="current">{currentPage}</button>
        {nextPage.map((item) => (
          <button className="pages" onClick={() => changeCurrentPage(item)}>
            {item}
          </button>
        ))}
        {nextPage.slice(-1) < totalPage && nextPage.length ? (
          <div className="ellipsis">...</div>
        ) : (
          <div className="ellipsis"></div>
        )}
        {currentPage < totalPage ? (
          <div className="btn-next">
            <button onClick={toNextPage}>next</button>
            <button onClick={toLastPage}>last</button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="choose-limit">
        <div className="choose-limit-info">
          Количество элементов на странице
        </div>
        <div className="choose-limit-btn">
          <button onClick={() => changeLimitProducts(10)}>10</button>
          <button onClick={() => changeLimitProducts(20)}>20</button>
          <button onClick={() => changeLimitProducts(30)}>30</button>
        </div>
      </div>
    </>
  );
}

export default Pagination;
