import React, { useEffect, useState } from 'react'

function Image() {
    let [image, setImage] = useState(null)

    useEffect(() => {
        fetch('https://source.unsplash.com/random/800x600/?mars')
        .then(response => setImage(response.url))
        .catch(err => {
			console.log('Error happened during fetching', err);
		});
    }, [])

    return (
        <>
            {image && <img src={image} width='50%' alt='Mars' />}
            {/* <img src='https://source.unsplash.com/random/800x600/?mars' alt='' /> */}
        </>
    )
}

export default Image
