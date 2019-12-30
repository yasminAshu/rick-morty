import React from 'react'
import styled from "styled-components";


const FilterComponent = styled.div`
    width:auto;
`
const Label = styled.label`
    display: inline-block;
    margin-bottom: .5rem;
`
const SearchInput = styled.input`
    display: block;
    width: auto;
    padding: 6px 12px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 8px;
`;

const Search = styled.div`
    position: relative;
    display: flex;
    align-items: stretch;
`
const Button = styled.button`
    color: #fff;
    background-color: #6c757d;
    border: none;
    border-radius: 8px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    height: 38px;
   margin-left:-4px;
`;

const Select = styled.select`
    margin-top: 34px;
    min-width: 160px;
`

class CharacterList extends React.Component {
    render() {
        return (
            /*    <section className="data-filter">
                   <div className="container">
                       <div className="row">
                           <div className="col-sm-4 col-12">
                               <label htmlFor="search">Search by Name</label>
                               <div className="input-group mb-3">
                                   <input type="text" id="search" className="form-control" placeholder="Search" onChange = {(e)=>this.props.handleSearch(e)}/>
                                   <div className="input-group-append">
                                       <button className="btn btn-secondary" type="submit" onClick = {this.props.handleSubmit}>Search</button>
                                   </div>
                               </div>
                           </div>
                           <div className="col-sm-8 col-12">
                               <div className="sort-by float-right mb-3">
                                   <select onChange = {(e)=> this.props.setSorting(e)}>
                                       <option value="volvo">Sort by ID</option>
                                       <option value="ascendant">Ascending</option>
                                       <option value="descendant">Descending</option>
                                   </select>
                               </div>
                           </div>
                       </div>
                   </div>
               </section> */
            <>
                <FilterComponent >
                    <Label htmlFor="search">Search by Name</Label>
                        <Search>
                            <SearchInput
                                onChange={this.props.handleSearchValueChange}
                                id = "search"
                                type="text"
                                placeholder="Character Name"
                                value={this.props.searchValue}
                            />
                            <Button onClick = {this.props.handleSubmit} type="submit" value="Search!" >Search!</Button>
                        </Search>
                </FilterComponent>
                <FilterComponent >
                    <Select onChange={(e) => this.props.setSorting(e)}>
                        <option value="volvo">Sort by ID</option>
                        <option value="ascendant">Ascending</option>
                        <option value="descendant">Descending</option>
                    </Select>
                </FilterComponent>
            </>

        )
    }
}
export default CharacterList