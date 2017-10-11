import React from 'react';

export default function CharacterList(props) {
    const currentSearchTerm = props.currentSearchTerm.toLowerCase();
    const relatedCharacters = props.characters.filter(character => character.name.toLowerCase().includes(currentSearchTerm));

    const characters = relatedCharacters.map((character, index) =>
        <li key={index}>
            <strong>{character.name}</strong> ({character.actor}) - {character.description}</li>
    );
    return (
        <ul className="character-list" aria-live="polite">
            {characters}
        </ul>
    );
}
