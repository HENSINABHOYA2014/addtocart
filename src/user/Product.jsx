import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";


const Product = () => {
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);//categeory
    const [marketStatus, setMarketStatus] = useState("");//market status
    const [sortData, setSortData] = useState(""); //shorting
    // const[currenrPage,setCurrentPage]=useState(1);
    // const [currentPage, setCurrentPage] = useState(1);
    // const recordsPerPage = 3;
    // const indexOfLastRecord = currentPage * recordsPerPage;
    // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  
    // const currentRecords = product.slice(indexOfFirstRecord, indexOfLastRecord);
    // const nPages = Math.ceil(product.length / recordsPerPage)
    // const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  
    // const change = (id) => {
    //     setCurrentPage(id);
    //   }
  
    // pageNumbers.map((pageNumber) => {
    //   return (
    //     <button
    //       key={pageNumber}
    //       onClick={() => change(pageNumber)}
    //       className="btn btn-outline-primary"
    //     >
    //       {pageNumber}
    //     </button>
    //   );
    // });
    // const recordperpage=5;
    // const lastIndex=currenrPage * recordperpage;
    // const firstIndex=lastIndex - recordperpage;
    // const records=data.slice(firstIndex,lastIndex);
    // const npages=Math.ceil(data.length/recordperpage);
    // const numbers=[...Array(npages+1).keys()].slice(1);


    const allProduct = () => {
        axios.get(`http://localhost:8000/products?marketStatus=instock`)
            .then((res) => {
                setProduct(res.data)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const allCategory = () => {
        axios.get(`  http://localhost:8000/category`)
            .then((res) => {
                setCategory(res.data)
            }).catch((err) => {
                console.log(err);
                return false
            })
    }

    const categoryFilter = (category) => {
        if (category === 'all') {
            allProduct();
        } else {
            axios.get(`http://localhost:8000/products?category=${category}&marketStatus=instock`)
                .then((res) => {
                    setProduct(res.data);
                })
                .catch((err) => {
                    
                });
        }
    }
// shorting(high to law)
    const handleSort = async (Sort) => {
        setSortData(Sort);
        if ("Low to High" === Sort) {
          let sort = await axios.get('http://localhost:8000/products?_sort=price');
          setProduct(sort.data)
        } else if ("High to Low" === Sort) {
          let sort = await axios.get('http://localhost:8000/products?_sort=price&_order=desc');
          setProduct(sort.data)
        } else if ("Reset" === Sort) {
          let sort = await axios.get('http://localhost:8000/products');
          setProduct(sort.data)
        }
      }

  
const onpagination = async (ans) => {
      if (ans === "F") {
        let pagination = await axios.get(`http://localhost:8000/products?_page=1&_limit=10`);
        setProduct(pagination.data)
      } else if (ans === "M") {
        let pagination = await axios.get(`http://localhost:8000/products?_page=2&_limit=10`);
        setProduct(pagination.data)
      }
      else if (ans === "L") {
        let pagination = await axios.get(`http://localhost:8000/products?_page=3&_limit=10`);
        setProduct(pagination.data)
      }
    }

    const SearchData = async (e) => {
        let data = await axios.get(`http://localhost:8000/products?q=${e}`);
        setProduct(data.data);
    }
useEffect(()=>{
    fetch(`http://localhost:8000/products?status=${marketStatus}&marketStatus=instock`)
    .then(res=>res.json())
    .then(data=>setProduct(data))
    .catch((err)=>{
        console.log(err);
        return false;
    });
    
},[marketStatus])
    useEffect(() => {
        allProduct()
        allCategory()
    }, []);
    return (
        <>
            <div className="container p-5 " style={{ fontFamily: 'Rubik' }}>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section__head d-flex justify-content-between mb-10">
                            <div className="section__title">
                                <h5 className="st-titile">Top Selling Products</h5>
                            </div>
                            <input type="text" className="p-3" placeholder="search" onChange={(e) => SearchData(e.target.value)} id="search" />
                            <div className="product__nav-tab">
                                <ul className="nav nav-tabs" id="flast-sell-tab" role="tablist">
                                <div className='d-flex justify-content-end'>
                <button className="  btn btn-outline-primary me-5 ps-4 pe-4" onClick={() => handleSort("Low to High")}>Low to High </button>
              <button className="  btn btn-outline-primary me-5 ps-4 pe-4" onClick={() => handleSort("High to Low")}>High to low</button>
              <button className=" btn btn-outline-primary me-5 ps-4 pe-4" onClick={() => handleSort("Reset")}>Reset</button>
                </div>
                                    {/* <select onChange={(e) => setMarketStatus(e.target.value)} >
                                        <option>--- select status----</option>
                                        <option value="best">Best</option>
                                        <option value="upcomming">Upcomming</option>
                                        <option value="trending">Trending</option>
                                        <option value="latest">latest</option>
                                    </select> */}

                                    {/* <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="computer-tab" data-bs-toggle="tab" data-bs-target="#computer" type="button" role="tab" aria-controls="computer" aria-selected="false">Mobile</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="samsung-tab" data-bs-toggle="tab" data-bs-target="#samsung" type="button" role="tab" aria-selected="false">Tv</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="htc-tab" data-bs-toggle="tab" data-bs-target="#htc" type="button" role="tab" aria-selected="false">Ipad</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="nokia-tab" data-bs-toggle="tab" data-bs-target="#nokia" type="button" role="tab" aria-selected="false">Moniter</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="cell-tab" data-bs-toggle="tab" data-bs-target="#cell" type="button" role="tab" aria-selected="true">Headphone</button>
                                    </li> */}
                                    {
                                        category.map((val) => {
                                            return (
                                                <>
                                                    <li className="nav-item" role="presentation">

                                                        <button onClick={() => categoryFilter(val.category_name)} style={{ width: '100%' }} type="button" className="nav-link" id="cell-tab" data-bs-toggle="tab" data-bs-target="#cell" role="tab" aria-selected="true">{val.category_name}</button>
                                                    </li>

                                                </>
                                            )
                                        })
                                    }
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    {
                        product.map((val) => {
                            return (
                                <div className="col-md-3 pb-4 ">
                                    <div className="card" style={{ width: '25rem', border: 'none', padding: '15px' }}>
                                        <img style={{ height: '200px', width: '25rem', objectFit: 'contain' }} src={val.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <br />
                                            <h3 className="font" style={{ color: 'DodgerBlue' }}>{val.content}</h3>
                                            <div className="rating">
                                                <ul>
                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                    <li><a href="#"><i className="fal fa-star" /></a></li>
                                                </ul>
                                                <span>(01 review)</span>
                                            </div>
                                            <h4 className="card-title pt-2 pb-2"> {val.price}</h4>
                                            <div className="progress mb-3">
                                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <h4 className="card-title" style={{ color: 'Gray' }}>Sold: {val.sold}</h4>
                                            <br />
                                            <Link to={`/product_details/${val.id}`}>
                                                <button className="cart-btn">View More</button>
                                            </Link>
                                            {/* <button className="cart-btn">View More</button> */}
                                            {/* <div className="hover-content">
                                                <a href="#" className="add-to-cart"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                                            </div> */}
                                            {/* <h5 className="card-title">Price :- {val.price}</h5> */}
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                    {/* <div className="pagination">
              <ul className="pagination">
                {pageNumbers.map((pageNumber) => {
                  return (
                    <li key={pageNumber} className="page-item">
                      <button
                        onClick={() => change(pageNumber)}
                        className="page-link"
                      >
                        {pageNumber}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div> */}
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" onClick={() => onpagination()}>Previous</a></li>
                  <li className="page-item"><a className="page-link" onClick={() => onpagination("F")}>1</a></li>
                  <li className="page-item"><a className="page-link" onClick={() => onpagination("M")}>2</a></li>
                  <li className="page-item"><a className="page-link" onClick={() => onpagination("L")}>3</a></li>
                  <li className="page-item"><a className="page-link" onClick={() => onpagination()}>Next</a></li>
                </ul>
              </nav>
                </div>
            </div>


        </>
    )
}
export default Product;