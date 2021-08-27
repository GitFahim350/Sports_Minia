import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import { faGender } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import './Teamdetails.css'
import male from './male.jpg';
import female from './women.jpg';
const Teamdetails = (props) => {
    const teamid = useParams();
    console.log(teamid.teamid);
    const [indteam, setindteam] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?sname=${teamid.teamid}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.teams[0])
                setindteam(data.teams[0])

            })
    }, [])
    return (
        <Container>
            <div className="background">
                <img src={indteam.strTeamBadge} alt="" />

            </div>
            <div className="indteam_inf">

                <div className="cont_class mt-4">
                    <div className="info_div ms-3">
                        <p className="h5"><FontAwesomeIcon icon={faFlag} /> Founded: {indteam.intFormedYear}</p>
                        <p className="h5"><FontAwesomeIcon icon={faFlag} /> Country: {indteam.strCountry}</p>
                        <p className="h5"><FontAwesomeIcon icon={faFutbol} /> Sports type: Football</p>
                        <p className="h5"><FontAwesomeIcon icon={faMars} /> Gender: {indteam.strGender}</p>

                        <p className="h5"> Team Name: {indteam.strTeam}</p>

                    </div>
                    <div className="team_div">
                        {
                            indteam.strGender === "Male" ? <img src={male} alt=" male Teampicture" /> : <img src={female} alt="Teampicture" />
                        }

                    </div>



                </div>
                <p className="des mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ipsam veritatis architecto ea, labore illum corporis ad sit alias atque! Aliquid enim nesciunt consequatur voluptates asperiores harum accusantium excepturi nulla reprehenderit eius porro nobis sunt molestiae placeat, praesentium unde labore ea officiis eaque quidem consequuntur provident quibusdam ut optio? Vero voluptate accusantium fuga placeat ut animi ipsam perspiciatis blanditiis, ducimus beatae sint, repudiandae quos dolorem culpa quae amet voluptas doloribus voluptates. Totam accusamus aut, pariatur suscipit magnam quos, porro cum et, fugiat debitis libero tempora! Exercitationem, totam, laborum molestias soluta, quasi placeat deleniti esse recusandae facere autem quibusdam nostrum libero fuga quis reiciendis quidem accusantium. Commodi soluta nemo ex molestiae, voluptate aspernatur explicabo dicta quas, nisi nulla eaque eius cum temporibus iure molestias cupiditate, sed alias voluptas illum. Vero dolor mollitia porro ipsam quaerat obcaecati nemo illo quo pariatur officiis hic culpa optio eos architecto laborum sed maxime atque, officia, blanditiis beatae! Quasi, facilis. Sint eaque dolores, iusto perferendis numquam recusandae asperiores cum, ipsum error facilis corporis aut quaerat aliquam illo unde mollitia maxime vero sunt delectus ducimus voluptas nihil distinctio itaque ipsa. Temporibus quo fugit quibusdam tempore vitae culpa reiciendis iste eos doloribus harum ipsum odio dolorem distinctio corrupti cupiditate sed, provident id nisi! Eius facilis blanditiis necessitatibus exercitationem aliquam doloremque incidunt non laboriosam, distinctio, saepe aut recusandae! Earum laudantium debitis, labore molestiae totam asperiores dignissimos quae, modi esse quam rerum quidem ea facilis ipsam saepe consequatur? Quia perspiciatis cum temporibus iusto magni earum fuga voluptatem sequi dicta iste suscipit nihil numquam placeat reiciendis laboriosam nostrum quibusdam, quam tenetur quas consequatur ullam, eos rerum eaque! Tempora error eligendi exercitationem itaque nostrum neque perferendis quam! Blanditiis suscipit aliquam quas dolore voluptates alias nam, nostrum similique labore consequatur hic cum saepe eos distinctio eius fugit reprehenderit ratione natus velit, rem, quisquam accusamus. Aliquid veniam aperiam, ab autem animi eaque magnam hic illum distinctio, sunt, perspiciatis molestias nobis tempore incidunt officiis ratione enim sed! Tenetur dignissimos illum iure hic quibusdam quisquam distinctio reprehenderit in quidem repudiandae! Rem fugiat voluptates sunt atque voluptate soluta repellat assumenda aliquid, optio, doloremque odio magni nisi quia dignissimos, itaque ipsa amet quidem. Fugit animi eveniet quas, aliquid molestias, iure temporibus suscipit alias voluptates placeat aperiam illo assumenda nemo perspiciatis quasi, nam quae accusamus. Ad fugiat quidem tempora aliquid qui laborum cupiditate sequi recusandae ipsa, odio magnam nam sapiente quasi consectetur earum reprehenderit delectus commodi iusto quam nulla!</p>

                <div className="icons mb-3">
                    {
                        console.log("Social link of this team",indteam.strTwitter)
                    }
                    <a href={`https://${indteam.strTwitter}`}><FontAwesomeIcon className="me-3" icon={faTwitter} /></a>
                    <a href={`https://${indteam.strYoutube}`}><FontAwesomeIcon className="me-3" icon={faYoutube} /></a>
                    
                </div>



            </div>


        </Container>

    );
};

export default Teamdetails;