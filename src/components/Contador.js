import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends React.Component {

    state = {
        number: 0
    }

    maisUm = () => {
        this.setState({ number: this.state.number + 1 })
    }

    limpar = () => {
        this.setState({ number: 0 })
    }

    render() {        
        return (
            <View>
                <Text style={{fontSize: 30}}>{this.state.number}</Text>
                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={this.limpar}
                >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}