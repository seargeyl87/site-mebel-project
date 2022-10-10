import "../App.css";
import { useState, useEffect, useMemo } from "react";
import PostService from "./PostService";
import PostService2 from "./PostService2";
import { useParams } from "react-router-dom";
import Products from "./Products";
import Pagination from "./Pagination";

function OurProducts() {
  let [limitProducts, setLimitProducts] = useState(6); // количество элементов на странице
  let [totalCount, setTotalCount] = useState(0); // всего элементов (получаем с сервера)
  let [listProducts, setListProducts] = useState([]); //  получаемые данные с сервера

  let [shiftLeft, setShiftLeft] = useState(5); // количество кнопок слева от текущей страницы
  let [shiftRight, setshiftRight] = useState(4); // количество кнопок справа от текущей страницы
  let [currentPage, setCurrentPage] = useState(5); // текущая страница

  let [prevPage, setPrevPage] = useState([]); // сами страницы слева
  let [nextPage, setNextPage] = useState([]); // сами страницы справа
  let [totalPage, setTotalPage] = useState(); // количество страниц

  let { id } = useParams();

  async function getData() {
    let response = await PostService2.getOurProduct(limitProducts, currentPage);
    setListProducts(response.data);
    setTotalCount(response.headers["x-total-count"]);
  }

  useEffect(() => {
    getData();
  }, [limitProducts, currentPage]);

  let createPrevPage = () => {
    let pages = [];
    for (let i = shiftLeft; i >= 1; i--) {
      if (currentPage - i > 0) {
        pages.push(currentPage - i);
      }
    }
    setPrevPage(pages);
  };

  let createNextPage = () => {
    let maxPage = Math.ceil(totalCount / limitProducts);
    setTotalPage(maxPage);
    let pages = [];
    for (let i = 1; i <= shiftRight; i++) {
      if (currentPage + i <= maxPage) {
        pages.push(currentPage + i);
      }
    }
    setNextPage(pages);
  };

  useMemo(() => {
    createNextPage();
    createPrevPage();
  }, [totalCount, currentPage, limitProducts]);

  let changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  let changeLimitProducts = (limit) => {
    setLimitProducts(limit);
    setCurrentPage(1);
  }

  let toFirstPage = () => {
    setCurrentPage(1)
  }

  let toPrevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  }

  let toNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  }

  let toLastPage = () => {
    setCurrentPage(totalPage)
  }



  return (
    <div className="our-products">
      <div className="our-products-head">
        <h2>OUR PRODUCTS</h2>
      </div>
      <div className="our-products-filter">
        <a href="" className="our-products-filter-item select">
          All Products
        </a>
        <a href="" className="our-products-filter-item">
          Best Sellers
        </a>
        <a href="" className="our-products-filter-item">
          New Arrivals
        </a>
        <a href="" className="our-products-filter-item">
          Todays Deals
        </a>
      </div>
      <Products listProducts={listProducts} id={id} />
      <div className="pagination">
        <Pagination
          prevPage={prevPage}
          currentPage={currentPage}
          nextPage={nextPage}
          changeCurrentPage={changeCurrentPage}
          changeLimitProducts={changeLimitProducts}
          toPrevPage={toPrevPage}
          toFirstPage={toFirstPage}
          toNextPage={toNextPage}
          toLastPage={toLastPage}
          totalPage={totalPage}
          totalCount={totalCount}
          limitProducts={limitProducts}
        />
      </div>
    </div>
  );
}

export default OurProducts;
