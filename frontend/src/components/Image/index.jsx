import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';




function Image({ ...props }) {

    return <LazyLoadImage
        width="100%"
        height="100%"
        effect="blur"
        {...props}
    />
}

export default Image