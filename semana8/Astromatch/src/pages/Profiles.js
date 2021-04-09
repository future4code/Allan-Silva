import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Home(props) {

    const [profile, setProfile ] = useState()

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = () => {

        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person", 
            // {
            //     Authorization: "allan-silva-cruz",
            //     aluno: "allan",
            // }
        )
        .then((res) => {
            setProfile(res.data.profile)
        }) 
        .catch((err) => {
            console.log(err)
        })
    }

    const getMatch = (id) => {

        const body = {
            id: profile.id,
            choice: id,
        }

        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches", body)
            .then((res) => {
                if (res.data.isMatch === true) {
                    alert("Match! Essa pessoa se interessou por você assim como você se interessou por ela! Vá na lista de matches e chame ela pra bater um papo!")
                    getProfile()
                } else if (res.data.isMatch === false) {
                    getProfile()
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return(
    <div>

    </div>
    )
}

export default Home;