const imageUrl = (url) => {
    const endPoints = process.env.REACT_APP_IMG_URL_ENDPOINT
    return endPoints + url
}

export default imageUrl