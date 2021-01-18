import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getWildPokemon } from '../../dux/reducer';

export class Container extends Component {

    componentDidMount() {
        this.props.getWildPokemon()
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.reducer.wildPokemon[0]?.name}</h1>
                <img src={this.props.reducer.wildPokemon[0]?.sprites.front_default} />
                <button onClick={this.props.getWildPokemon}>Get Pokemon</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        reducer: reduxState.reducer
    }
}

export default connect(mapStateToProps, { getWildPokemon })(Container)
