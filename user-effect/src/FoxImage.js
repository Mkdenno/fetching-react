import React, { useEffect, useState } from 'react';

const URL = "https://randomfox.ca/floof/"

// when the foximage component renders (only do this once)
// make a GET https://randomfox.ca/floof/
// set the image in state

function FoxImage() {
  const [image, setImage] = useState(null)

  useEffect(()=>{
    fetch(URL)
    .then(res => res.json())
    .then(data => setImage(data.image))

  }, [])
  
  return (
    <div>
      <p>Here's a lovely fox for you:</p>
      <img src={image} alt="Random Fox" />
    </div>
  );
}

export default FoxImage