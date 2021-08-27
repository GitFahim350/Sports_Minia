import React from 'react';
import { useParams } from 'react-router-dom';

const SocialLink = () => {
    const sociallink=useParams();
    console.log(sociallink.sociallink);
    return (
        <div>
            <a href={sociallink.sociallink}> click</a>

            <h1>Social link:</h1>
            
        </div>
    );
};

export default SocialLink;