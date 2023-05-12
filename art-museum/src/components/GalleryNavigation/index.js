import { NavLink }from 'react-router-dom';

const GalleryNavigation = ({galleries}) => {
    
    const links = galleries.map((ele) => {
        // debugger
        // console.log(ele.galleryid);
        return <NavLink key={ele.galleryid} to={`/galleries/${ele.galleryid}`}> {ele.name} </NavLink>
    });
    // console.log(galleries)
    // debugger
    return (
        <nav className='test'>
            <h1>Galleries</h1>
            {links}
            
            {/* <NavLink to="/" activeStyle={{ color: 'red' }}>gal</NavLink> */}
        </nav>
    )
}

export default GalleryNavigation;