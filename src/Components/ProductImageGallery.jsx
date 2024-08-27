import { useState, useEffect } from "react";
import './ProductImageGallery.css'

function ProductImageGallery ({getProduct, product}) {
    const {imageUrl} = product 
    const [selectedImage, setSelectedImage] = useState(imageUrl[0])
    
    useEffect(() => {
        // getProduct()
        setSelectedImage(imageUrl[0])
    }, [product])
 
    
    const handleThumbnailClick = (image) => {
        setSelectedImage(image)
    }

    return(
        <div className="image-gallery">
            <div className="image-viewer">
                <img className="main-image" src={selectedImage} alt="" />
            </div>
            <div className="thumbnails">
                {imageUrl.map((image, index) => {
                    return <img 
                        key={index} 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`} 
                        className={
                            `thumbnail ${selectedImage === image ? 'active' : ''}`
                        } 
                        onClick={() => handleThumbnailClick(image)}
                    />
                })}
            </div>
        </div>
    )
}

export default ProductImageGallery