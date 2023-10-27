// import Magnifier from 'react-image-magnify';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageMagnifier from "./ImageMagnifier";
const ImageSlider = () => {
    const images = [
        {
          original: "https://www.ethnicplus.in/media/catalog/product/cache/c8dd8ab41cc505e943026004bfd0a7b6/2/0/2018blk_ref1.jpg",
          thumbnail: "https://www.ethnicplus.in/media/catalog/product/cache/c8dd8ab41cc505e943026004bfd0a7b6/2/0/2018blk_ref1.jpg",
        },
        {
          original: "https://www.ethnicplus.in/media/catalog/product/cache/c8dd8ab41cc505e943026004bfd0a7b6/2/0/2018blk_ref1.jpg",
          thumbnail: "https://www.ethnicplus.in/media/catalog/product/cache/c8dd8ab41cc505e943026004bfd0a7b6/2/0/2018blk_ref1.jpg",
        },
        {
          original: "https://www.ethnicplus.in/media/catalog/product/cache/c8dd8ab41cc505e943026004bfd0a7b6/2/0/2018blk_ref1.jpg",
          thumbnail: "https://www.ethnicplus.in/media/catalog/product/cache/c8dd8ab41cc505e943026004bfd0a7b6/2/0/2018blk_ref1.jpg",
        },
      ];

    return( <ImageGallery 
        items={images} 
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        lazyLoad={true}
        renderItem={ImageMagnifier} 
       />)
}
export default ImageSlider;