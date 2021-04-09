import axios from 'axios';
import React, { useState } from 'react';

function Profile(props) {

    const [profile, setProfile ] = useState()

    const getProfile = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
    }

    return(
    <div>

    </div>
    )
}

export default Profile;