import React from 'react';

const cardStyle = { 
    border: '2px solid #17a589',
    boxShadow: '5px 6px 0px #17a589',
    borderRadius: '3px',
    padding: '21px',
    textAlign: 'center',
    width: '340px' };
const imgStyle = {borderRadius: '50%', border: '4px solid #17a589'};

function Profile(props) {
    props.handleName(props.fullName);
    return (
        <div style={cardStyle}>
            <div>
                <img 
                    src={props.children}
                    alt="avatar"
                    width='140'
                    height='140'
                    style = {imgStyle} >
                </img>
            </div>
            <br></br>
            <div>
                <h1 style={{color : '#17a589'}}>{props.fullName}</h1>
            </div>
            <div>
                <p style={{fontSize: '.8rem'}}>{props.profession}</p>
            </div>
            <br></br>
            <div>
                <p>{props.bio}</p>
            </div>
        </div>
    );
}

Profile.defaultProps = { children : "https://ih1.redbubble.net/image.1046392292.3346/flat,128x128,075,t.jpg"}

export default Profile;