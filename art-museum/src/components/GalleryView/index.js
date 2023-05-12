import { useParams } from "react-router-dom";

const GalleryView = (prop) => {
    let { galleryId } = useParams();
    console.log(prop);

    // prop.map((ele) => {
    //     if (ele.galleryid === galleryId) {
    //         return console.log(ele);
    //     }
    // })

    return (
        <h1>Hello from GalleryView</h1>
    )
}

export default GalleryView;