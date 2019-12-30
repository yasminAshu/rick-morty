import React from 'react'
import CharacterCard from './CharacterCard';
import styled from "styled-components";
/* class CharacterList extends React.Component {
    render() {
        return (
            <section className="api-data">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="api-data__bg">
                                <div class="row">
                                <CharacterCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                    )
                }
            }
export default CharacterList */
const CharacterListBody = styled.div`
         background: #000000;
    padding: 12px 8px 0 8px;
    box-sizing: border-box;      
    display: flex;
    flex-wrap: wrap;
`

export default ({ characters, searchValue }) => (
    <section className="api-data">
        {/*         <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="api-data__bg">
                        <div class="row">
                            {characters.map(character => (
                                <CharacterCard character={character} key={character.id} />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <CharacterListBody>
            {characters.map(character => (
                <CharacterCard character={character} key={character.id} />
            ))}
        </CharacterListBody>
    </section>
)
