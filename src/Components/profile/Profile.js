import React from 'react'

function Profile(props) {
    console.log(props)
    return (
        <div>
            <h1>{props.fullname}</h1>
            <img src={props.bio} alt=""></img>
            <p>{props.profession}</p>
        </div>
    )
}

export default Profile
