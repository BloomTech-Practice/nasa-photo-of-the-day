import React from 'react'

function PhotoOfTheDay(props){
  const {spaceData} = props
  
  return(
    <div>
       <img src={spaceData.url} alt="space"/>
      <h1>{spaceData.title}</h1>
      <h2>{spaceData.copyright}</h2>
      <h3>{spaceData.date}</h3>
      <p>{spaceData.explanation}</p>
    </div>
  )
}

export default PhotoOfTheDay