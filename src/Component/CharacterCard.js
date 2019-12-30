import React from 'react'
import styled from "styled-components";
/* 
class CharacterCard extends React.Component {
    render() {
        return (
            <div class="col-6 col-sm-3">
                <div class="api-data__block">
                    <div class="card img-fluid">
                        <img class="img" src="../img/sunrise.jpg" alt="APi Data image" />
                        <div class="overlay">
                            <div class="block">
                                <h5 class="title">Hunter's Father</h5>
                                <p class="id"> id: 111 - created 2 years ago </p>
                            </div>
                        </div>
                    </div>
                    <div class="data">
                        <ul>
                            <li><span>Status</span><span class="info">Alive</span></li>
                            <li><span>Species</span><span class="info">Human</span></li>
                            <li><span>Gender</span><span class="info">Female</span></li>
                            <li><span>Origin</span><span class="info">Post - Apocalyptic Earth</span></li>
                            <li><span>Last Location</span><span class="info">Post - Apocalyptic Earth</span></li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}
export default CharacterCard */
const CharacterCard = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    padding-right: 5px;
    padding-left: 5px;
    box-sizing: border-box;
`
const CharacterData = styled.div`
position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000000;
    opacity: 0.6;
    padding: 7px 10px;
 .title {
    font-size: 18px;
 }
 .id {
    font-size: 13px;
 }
`
const CharacterDetail = styled.div`
background: #312c2c;
padding: 15px;
border-bottom-left-radius: 7px;
border-bottom-right-radius: 7px;
ul {
    padding: 0;
    margin: 0;
}
ul li {
    font-size: 10px;
    list-style: none;
    color: #fff;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    text-transform: uppercase;
}
ul li:not(:last-child){
    border-bottom: 1px solid #504949;
}
ul li span {
    width: 40%;
}
span.info {
    color: #ec8624;
    text-transform: capitalize;
    width: 60%;
    text-align: right;
}
`;

const CharacterHeader = styled.div`

`

export default ({ character }) => (
    /*     <div class="col-6 col-sm-3">
        <div class="api-data__block">
            <div class="card img-fluid">
                <img class="img" src={character.image} alt="APi Data image" />
                <div class="overlay">
                    <div class="block">
                        <h5 class="title">{character.name}</h5>
                        <p class="id"> id: {character.id} - created 2 years ago </p>
                    </div>
                </div>
            </div>
            <div class="data">
                <ul>
                    <li><span>Status</span><span class="info">{character.status}</span></li>
                    <li><span>Species</span><span class="info">{character.species}</span></li>
                    <li><span>Gender</span><span class="info">{character.gender}</span></li>
                    <li><span>Origin</span><span class="info">{character.origin.name}</span></li>
                    <li><span>Last Location</span><span class="info">{character.location.name}</span></li>
                </ul>
            </div>
        </div>
    </div> */
    <CharacterCard>
        <div classNmae="card">
            <img src={character.image} alt={character.name} />
            <CharacterData>
                <CharacterHeader>
                <h3 class="title">Hunter's Father</h3>
                <p class="q"> id: 111 - created 2 years ago </p>
            </CharacterHeader>
            <CharacterDetail>
            <ul>
                <li><span>Status</span><span class="info">Alive</span></li>
                <li><span>Species</span><span class="info">Human</span></li>
                <li><span>Gender</span><span class="info">Female</span></li>
                <li><span>Origin</span><span class="info">Post - Apocalyptic Earth</span></li>
                <li><span>Last Location</span><span class="info">Post - Apocalyptic Earth</span></li>
              </ul>
            </CharacterDetail>
            </CharacterData>
        </div>
    </CharacterCard>
)