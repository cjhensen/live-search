import React from 'react';

import SearchForm from './search-form';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearchTerm: ''
    };
  }

  setCurrentSearchTerm(term) {
    this.setState({
      currentSearchTerm: term
    });
  }


  render() {
    return (
        <div className="live-search">
            <SearchForm 
              onChange={value => this.setCurrentSearchTerm(value)}
              value={this.state.currentSearchTerm}
            />
            <CharacterList 
              characters={this.props.characters} 
              currentSearchTerm={this.state.currentSearchTerm}
            />
        </div>
    );
  }
    
}
