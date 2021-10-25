import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    const [toggleBody, setToggleBody] = useState(false);
    const [toggleFace, setToggleFace] = useState(false);

    return (
        <div className='nav-container'>
            <div className='navbar'>
                
                <Link to='/store/best-sellers'>BEST SELLERS</Link>
                <div className='dropdown'>
                    <Link to='/bodycare' onClick={()=>setToggleBody(!toggleBody)}>BODYCARE</Link>
                    {toggleBody ? '' : (<>
                         <div className='dropdown-content'>
                         <div className='links'>
                             <h6>By Skin Type</h6>
                             <Link to='/bodycare?name=oily'>Oily Skin</Link>
                             <Link to='/bodycare?name=dry'>Dry Skin</Link>
                             <Link to='/bodycare?name=sensitive'>Sensitive Skin</Link>
                             <Link to='/bodycare?name=all'>All Skin Types</Link>
                         </div>
 
                         <div>
                             <Link to='/bodycare' style={{color:'black'}}><h5>Shop all Body Care</h5></Link>
                             <div className='nav-img'>    
                                 <img src='https://res.cloudinary.com/dgzbojudn/image/upload/v1633739196/ceramidin_myovxf.png' alt='ceramidin'/>
                                 <img src='https://res.cloudinary.com/dgzbojudn/image/upload/v1633477927/beautyStore/waterbank-lan_d0i2wi.png' alt='cera'/>
                             </div>
                         </div>       
                     </div>    
                    </>)}
                </div>

                <div className='dropdown'>
                    <Link to='/face-care' onClick={()=>setToggleFace(!toggleFace)}>FACECARE</Link>
                    
                        {toggleFace ? '' : (<>
                            <div className='dropdown-content' id='drop-face'>
                                <div className='links'>
                                    <h6>By Skin Type</h6>
                                    <Link to='/face-care?name=oily'>Oily Skin</Link>
                                    <Link to='/face-care?name=dry'>Dry Skin</Link>
                                    <Link to='/face-care?name=sensitive'>Sensitive Skin</Link>
                                    <Link to='/face-care?name=all'>All Skin Types</Link>
                                </div>
                                <div>
                                    <Link to='/face-care' style={{color:'black'}}><h5>Shop all Face Care</h5></Link>
                                    <div className='nav-img'>    
                                        <img src='https://res.cloudinary.com/dgzbojudn/image/upload/v1633715170/cosmetics-products-advertising_1284-32872_ob8mp6.jpg' alt='ceramidin'/>
                                        <img src='https://res.cloudinary.com/dgzbojudn/image/upload/v1633715170/beige-color-make-up-cosmetics-set-with-cream_1268-15446_piq5jw.jpg' alt='cera'/>
                                    </div>
                                </div>
                            </div>
                        </>)}
                        
                </div>
                <Link to='/store/all'>SHOP ALL</Link>
                <Link to='/about'>ABOUT</Link>
            </div>
        </div>
    );
};

export default Navbar;