/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
class SearchResultContainer extends Component {

    state = {
        search: "",
        results: []
    };

    // When this component mounts, fill the info columns with seed data
    componentDidMount() {
        API.search().then(res => {

            this.setState({
                ...this.state,
                results: [res.data.results]
            })
        }).catch(err => console.log(err));
    }
    
    getEmployees = () => {
        API.search().then(res => this.setState({
            ...this.state,
            result: [res.data.results]
        })).catch(err => console.log(err));

        // set employees to res.data.results
        // setFilteredResults(res.data.results)
    };

    handleInputChange = event => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            ...this.state,
            [name]: value
        });
    };

    // When the form is submitted, search the API for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.getEmployees(this.state.search);

    };

    render() {
        return (
            <div>
                <SearchForm search={
                    this.state.search
                }
                    handleFormSubmit={
                        this.handleFormSubmit
                    }
                    handleInputChange={
                        this.handleInputChange
                    } />
                <ResultList results={
                    this.state.results
                } />
            </div>
        );
    }
}

export default SearchResultContainer;


