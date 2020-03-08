import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson} />
             
                {this.props.pers.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onRemovedPerson(person.id)}/>
                ))}
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        pers: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: () => dispatch({type: 'ADD',payload:{ id: Math.random(), name: 'Max',age: Math.floor( Math.random() * 40 )}}),
        onRemovedPerson: (id) => dispatch({type: 'REMOVE',payload:{personId: id}})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);