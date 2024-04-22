import { useEffect, useState } from 'react'

function BackgroundImage({ src, placeholder = "", children, ...passProps }) {
    const [source, setSource] = useState(null)

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = src;

        imageLoader.onload = () => {
            setSource(src)
        };
    }, [])

    return (
        <div
            {...passProps}
            style={{ backgroundImage: `url(${source || placeholder})` }}
        >
            {children}
        </div>
    )
}

export default BackgroundImage