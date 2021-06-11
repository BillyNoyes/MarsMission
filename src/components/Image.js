import React, { useEffect, useState } from 'react';

function Image() {
    let [image, setImage] = useState(null)

    // Uses the fetch function and stores the image url in the image state
    useEffect(() => {
        fetch('https://source.unsplash.com/random/800x600/?mars')
        .then(response => setImage(response.url))
        .catch(err => {
			console.log('Error happened during fetching', err);
		});
    }, [])

    return (
        <>
            {/* Checks that there is an image stored within state before showing to user */}
            {image && <img src={image} style={{marginBottom: '20px'}} width='80%' alt='Mars' />}
        </>
    )
}

export default Image
