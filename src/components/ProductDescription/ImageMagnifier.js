import { Magnifier, GlassMagnifier, SideBySideMagnifier } from "react-image-magnifiers";

const ImageMagnifier = (item) =>{
    if (!item || !item.original) {
        return null; // Handle the case where item is undefined or doesn't have 'original'
      }
    return(<div>
      <GlassMagnifier
      imageSrc={item.original}
      imageAlt="productName"
      allowOverflow={false}
      square={true}
      />
      </div>)}
export default ImageMagnifier;