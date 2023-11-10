import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import checkUserLogin from "./Userauth";

const ProductDetails = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const getSingleProductRecord = async () => {
        try {
            let singleRecord = await axios.get(`http://localhost:8000/products/${productId}`);
            if (singleRecord) {
                setProduct(singleRecord.data);
            } else {
                console.log("Record Not Fetched");
                return false;
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    const AddToCart = (productId) => {
        if (!checkUserLogin()) {
            alert("Please Login");
            navigate('/login');
        } else {
            // Yeh API request product ko directly check karti hai
            axios.get(`http://localhost:8000/carts?productId=${productId}&userId=${checkUserLogin().id}`)
                .then((res) => {
                    if (res.data.length > 0) {
                        alert("Product already added in cart");
                        navigate('/product')
                    } else {
                        // Agar product cart mein available nahi hai, toh usse add karein
                        axios.get(`http://localhost:8000/products/${productId}`)
                            .then((res) => {
                                axios.post(`http://localhost:8000/carts`, {
                                    name: res.data.name,
                                    price: res.data.price,
                                    qty: res.data.qty,
                                    image: res.data.image,
                                    category: res.data.category,
                                    productId: productId,
                                    userId: checkUserLogin().id
                                }).then((res) => {
                                    alert("Product Successfully Added");
                                    navigate('/cart');
                                }).catch((err) => {
                                    console.log(err);
                                })
                            }).catch((err) => {
                                console.log(err);
                            })
                    }
                }).catch((err) => {
                    console.log(err);
                })
        }
    }
    

    useEffect(() => {
        getSingleProductRecord();
    }, []);

    return (
        <>
            <div className='container' style={{ fontFamily: 'Rubik' }}>
                <h1 className='pt-3 pb-3 text-center'>Product Details</h1>
                <div className='row p-5'>
                    <div className='col-lg-9 p-4' style={{ border: '1px solid gray', borderRadius: '10px' }}>
                        <div className='row'>
                            <div className="col-lg-3">
                                <img src={product.image} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-lg-6">
                                <div className="card-body">
                                    <h1 className="card-title pb-2" style={{ color: 'MediumBlue' }}>Name :- {product.name}</h1>

                                    <h3 className="card-title pb-3 pt-3" style={{ color: 'DeepSkyBlue' }}>Price :- {product.price}</h3>

                                    <h2 className="card-text pb-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h2>

                                    <div class="product__modal-des ">
                                        <ul className="p-3 productdetail-content">
                                            <div>
                                                <li><navlink><i className="fas fa-circle p-2 " /> Bass and Stereo Sound.</navlink>
                                                </li>
                                                <li><navlink><i className="fas fa-circle p-2" /> Display with 3088 x 1440
                                                    pixels resolution.</navlink></li>
                                                <li><navlink><i className="fas fa-circle p-2" /> Memory, Storage &amp; SIM:
                                                    12GB RAM, 256GB.</navlink></li>
                                                <li><navlink><i className="fas fa-circle p-2" /> Androi v10.0 Operating
                                                    system.</navlink></li>
                                            </div>

                                        </ul>
                                    </div>

                                    <h2 style={{ color: 'DodgerBlue' }}>{product.content}</h2>
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

                                    <h4 className="card-title pt-2 pb-2"> {product.price}</h4>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <h4 className="card-title" style={{ color: 'Gray' }}>Sold: {product.sold}</h4>
                                    <div className="product__modal-form">
                                        <form action="#">
                                            <div className="pro-quan-area d-lg-flex align-items-center">
                                                <div className="product-quantity mr-20 mb-25">
                                                    <div className="cart-plus-minus p-relative"><input type="number" defaultValue={1} /></div>
                                                </div>
                                                <div className="pro-cart-btn mb-25">
                                                   
                                                        <button className="cart-btn" onClick={() => AddToCart(product.id)} type="button">Add to cart</button>
                                                    
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    {/* <Link to={'/login'}><button onClick={() => AddToCart()} className="cart-btn w-50 mt-5" >Add To Cart</button>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetails;