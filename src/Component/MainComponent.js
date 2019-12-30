import React from 'react'
import styled from "styled-components";
import SearchComponent from './SearchComponent'
import CharacterList from './CharacterList'
import { getCharactersByName, getAllCharacters } from '../lib/api'

const AppContainer = styled.div`
    margin:10px;
    margin-top: 30px;
`
const SearchSection = styled.section`
    padding-right: 5px;
    padding-left: 5px;
`
const SearchContainer = styled.div`
   display:flex;
   justify-content: space-between;
   max-width: 1140px;
    margin: 0 auto;
`
const ResultsSection = styled.div`
  max-width: 1140px;
  margin: 0 auto;
 
`
class MainComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: "",
      results: [],
      notFound: false,
      isLoading: false,
      lastSearchValue: "",
      sorting: ""
    }
  }
  componentDidMount() {
    getAllCharacters()
      .then(({ results }) => this.setState({ results, notFound: false, isLoading: false }))
      .catch(() => this.setState({ notFound: true, results: [], isLoading: false }));
  }

  handleSearch = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  handleSubmit = () => {
    this.setState(state => ({ isLoading: true, lastSearchValue: state.searchValue }));
    getCharactersByName(this.state.searchValue)
      .then(({ results }) => this.setState({ results, notFound: false, isLoading: false }))
      .catch(() => this.setState({ notFound: true, results: [], isLoading: false }));
  }
  setSorting = (e) => {
    console.log("target==>", e.target.value)
    this.setState({ sorting: e.target.value })
  }
  render() {
    const { notFound, results, isLoading, lastSearchValue } = this.state;
    if (results) {
      switch (this.state.sorting) {
        case "ascendant":
          results.sort((a, b) => (a.id - b.id));
          break
        case "descendant":
          results.sort((a, b) => (b.id - a.id));
          break
        default:
          results.sort((a, b) => (parseInt(a.id) > b.id));
      }
    }
    return (
      /*  <section> */
      <AppContainer>

        <SearchSection>
          <SearchContainer>
            <SearchComponent handleSubmit={this.handleSubmit} handleSearch={this.handleSearch} setSorting={this.setSorting} />
          </SearchContainer>
        </SearchSection>

        <ResultsSection>
          
            {notFound
              ? <p className="not-found">No results found for {lastSearchValue}</p>
              : <CharacterList characters={results} searchValue={lastSearchValue} />
            }
       
        </ResultsSection>

      </AppContainer>
      /*   <SearchComponent handleSubmit  = {this.handleSubmit} handleSearch = {this.handleSearch} setSorting = {this.setSorting}/>
        {notFound
                  ? <p className="not-found">No results found for {lastSearchValue}</p>
                  : <CharacterList characters={results} searchValue={lastSearchValue}  />
                }
        </section> */
    )
  }
}

export default MainComponent 