import React, { useState, useEffect } from 'react';
import homeAbout from '../images/about/homeAbout.jpg';
import '../styles/Product.css';
import { ProductList } from './ProductList';
import ReactPaginate from 'react-paginate';
import Engineered from './Engineered';

function Product() {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    // const [filteredProducts, setFilteredProducts] = useState([]);
    // const [products, setProducts] = useState(ProductList);
    const itemsPerPage = 12;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(ProductList.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(ProductList.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, ProductList]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % ProductList.length;
        setItemOffset(newOffset);
    };
    // const filterProducts = (catItem) => {
    //     const result = ProductList.filter((curItem) => {
    //         return curItem.text === catItem
    //     })
    //     setProducts(result)
    // }

    return (
        <div>
            {/* main product section */}
            <section style={{ backgroundImage: `url(${homeAbout})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "top", height: "450px" }}>
                <div className='aboutContant'></div>
                <div className='container'>
                    <div className='text-center'><h1 className='aboutTitle'>PRODUCTS</h1></div>
                </div>
            </section>
            {/* filter product section */}
            <section className='py-5'>
                <div className='container pt-5'>
                    <div className='row pt-5'>
                        <div className='col-lg-3'>
                            <div style={{ backgroundColor: "#EBEBEB" }}>
                                <div className='p-2 pt-3'>
                                    <h4 className='text-center p-3 filterTitle'>Filter by Categories</h4>
                                </div>
                                <div className=''>
                                    <input type="checkbox" name="Engineered Flooring" className='m-2' ></input>
                                    <label for="Engineered Flooring" className='labelFilter'>Engineered Flooring</label><br />
                                    {/* Engineered filter */}
                                    <div className='d-flex pt-3'>
                                        <input type="checkbox" name="Australian Natives - Eucalypt Collections" className='m-2'></input>
                                        <label for="Australian Natives - Eucalypt Collections" className='subLabel'>Australian Natives - Eucalypt Collections</label>
                                    </div>
                                    <hr />
                                    <input type="checkbox" name="Definitive Native Flooring" className='m-2'></input>
                                    <label for="Definitive Native Flooring" className='subLabel'>Definitive Native Flooring</label><br />
                                    <hr />
                                    <input type="checkbox" name="Definitive Oak Flooring" className='m-2'></input>
                                    <label for="Definitive Oak Flooring" className='subLabel'>Definitive Oak Flooring</label>
                                    <hr />
                                    <div className='d-flex'>
                                        <input type="checkbox" name="European Oak - Forever Collections" className='m-2'></input>
                                        <label for="European Oak - Forever Collections" className='subLabel'>European Oak - Forever Collections</label>
                                    </div>
                                    <hr />
                                    <div className='d-flex'>
                                        <input type="checkbox" name="European Oak - Organic Collections" className='m-2'></input>
                                        <label for="European Oak - Organic Collections" className='subLabel'>European Oak - Organic Collections</label>
                                    </div>
                                    <hr />
                                    <input type="checkbox" name="OZ Flooring - Oak Ranges" className='m-2'></input>
                                    <label for="OZ Flooring - Oak Ranges" className='subLabel'>OZ Flooring - Oak Ranges</label><br />
                                    <hr />
                                    <input type="checkbox" name="OZ Flooring - Timber Ranges" className='m-2'></input>
                                    <label for="OZ Flooring - Timber Ranges" className='subLabel'>OZ Flooring - Timber Ranges</label><br />
                                    <hr />
                                    <input type="checkbox" name="Signature Ranges" className='m-2'></input>
                                    <label for="Signature Ranges" className='subLabel'>Signature Ranges</label>
                                </div>
                                {/* Hybrid filter */}
                                <div className='pt-5'>
                                    <input type="checkbox" name="Hybrid" className='m-2'></input>
                                    <label for="Hybrid" className='labelFilter'>Hybrid</label><br />
                                    <input type="checkbox" name="Alpha Hybrid Collection" className='m-2'></input>
                                    <label for="Alpha Hybrid Collection" className='subLabel pt-3'>Alpha Hybrid Collection</label>
                                    <hr />
                                    <input type="checkbox" name="Boston Hybrid Collection" className='m-2'></input>
                                    <label for="Boston Hybrid Collection" className='subLabel'>Boston Hybrid Collection</label>
                                    <hr />
                                    <input type="checkbox" name="Definitive Hybrid Flooring" className='m-2'></input>
                                    <label for="Definitive Hybrid Flooring" className='subLabel'>Definitive Hybrid Flooring</label>
                                    <hr />
                                    <div className='d-flex'>
                                        <input type="checkbox" name="Penguin Hybrid - 1500mm Length Plank" className='m-2'></input>
                                        <label for="Penguin Hybrid - 1500mm Length Plank" className='subLabel'>Penguin Hybrid - 1500mm Length Plank</label>
                                    </div>
                                    <hr />
                                    <div className='d-flex'>
                                        <input type="checkbox" name="Penguin Hybrid - 1800mm Length Plank" className='m-2'></input>
                                        <label for="Penguin Hybrid - 1800mm Length Plank" className='subLabel'>Penguin Hybrid - 1800mm Length Plank</label>
                                    </div>
                                    <hr />
                                    <input type="checkbox" name="Pinaco Hybrid" className='m-2'></input>
                                    <label for="Pinaco Hybrid" className='subLabel'>Pinaco Hybrid</label>
                                </div>
                                {/* Laminate filter */}
                                <div className='pt-5'>
                                    <input type="checkbox" name="Laminate" className='m-2'></input>
                                    <label for="Laminate" className='labelFilter'>Laminate</label><br />
                                    <input type="checkbox" name="Australian Species HD Series" className='m-2'></input>
                                    <label for="Australian Species HD Series" className='subLabel pt-3'>Australian Species HD Series</label>
                                    <hr />
                                    <input type="checkbox" name="BeauFloor Classic" className='m-2'></input>
                                    <label for="BeauFloor Classic" className='subLabel'>BeauFloor Classic</label>
                                    <hr />
                                    <input type="checkbox" name="FloorTex Classic" className='m-2'></input>
                                    <label for="FloorTex Classic" className='subLabel'>FloorTex Classic</label>
                                    <hr />
                                    <input type="checkbox" name="Pinaco Delication 8mm" className='m-2'></input>
                                    <label for="Pinaco Delication 8mm" className='subLabel'>Pinaco Delication 8mm</label>
                                    <hr />
                                    <input type="checkbox" name="Pinaco Selection 12mm" className='m-2'></input>
                                    <label for="Pinaco Selection 12mm" className='subLabel'>Pinaco Selection 12mm</label>
                                </div>
                                {/* Parquetry Flooring filter */}
                                <div className='pt-5'>
                                    <input type="checkbox" name="Parquetry Flooring" className='m-2'></input>
                                    <label for="Parquetry Flooring" className='labelFilter'>Parquetry Flooring</label><br />
                                    <input type="checkbox" name="Definitive Parquetry Flooring" className='m-2'></input>
                                    <label for="Definitive Parquetry Flooring" className='subLabel py-3'>Definitive Parquetry Flooring</label>
                                </div>
                                <div className='pt-5'>
                                    <input type="checkbox" name="Solid Timber" className='m-2'></input>
                                    <label for="Solid Timber" className='labelFilter'>Solid Timber</label><br />
                                    <input type="checkbox" name="Prestige Ranges" className='m-2'></input>
                                    <label for="Prestige Ranges" className='subLabel py-3'>Prestige Ranges</label>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-9'>
                            <div className='row ms-5'>
                                <div className='col-md-4'>
                                    <p>Showing 1-18 of 177 results</p>
                                </div>
                                <div className='col-md-4 m-auto'></div>
                                <div className='col-md-4'>
                                    <select id="product" placeholder="Default sorting" className='sortProduct' name="role">
                                        <option className='optionProduct'>Default sorting</option>
                                        <option className='optionProduct'>Sort by popularity</option>
                                        <option className='optionProduct'>Sort by gomacef971@tinydef.comlatest</option>
                                        <option className='optionProduct'>Sort by price: low to high</option>
                                        <option className='optionProduct'>Sort by price: high to low</option>
                                    </select>
                                </div>
                                {/* {filteredProducts.length > 0 &&(
                                    <Engineered/>
                                )}
                                {filteredProducts.length < 1 &&(
                                 
                                )} */}
                                {
                                    currentItems.map((obj) => {
                                        const { id, text, title, image } = obj;
                                        return (
                                            <div className='col-lg-3 m-2' style={{ backgroundColor: "#EBEBEB", width: "230px" }} key={id}>
                                                <div className='text-center'>
                                                    <img src={image} alt={text} className="img-fluid py-3" />
                                                    <p className='filterText11'>{text}</p>
                                                    <h2 className='filterTitle11'>{title}</h2>
                                                    <div className='py-3'>
                                                        <button className='filterProductBtn'>READ MORE</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel="--->"
                                    onPageChange={handlePageClick}
                                    // pageRangeDisplayed={5}
                                    pageCount={pageCount}
                                    previousLabel="<---"
                                    renderOnZeroPageCount={null}
                                    containerClassName="pagination"
                                    pageClassName="page-num"
                                    previousLinkClassName="page-num"
                                    nextLinkClassName="page-num"
                                    activeClassName="active"
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product