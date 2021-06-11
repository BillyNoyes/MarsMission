import React, { useEffect, useState } from 'react'

function Image() {
    let [image, setImage] = useState(null)

    useEffect(() => {
        fetch('https://source.unsplash.com/random/800x600/?mars')
        .then(response => response.json())
        .then(response => console.log(response))
        .then(data => setImage(data.message))
        .catch(err => {
			console.log('Error happened during fetching', err);
		});
    }, [])

    return (
        <>
            {image && <img src={image} alt='Mars' />}
        </>
    )
}

export default Image
