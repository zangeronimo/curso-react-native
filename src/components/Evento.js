import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import main from '../style/main'

export default class Evento extends Component {

    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({ texto })
    }

    render() {
        return (
            <View style={main.ex}>
                <Text style={main.fonte40}>{this.state.texto}</Text>
                <TextInput
                    value={this.state.texto}
                    style={main.input}
                    onChangeText={this.alterarTexto} />
            </View>
        )
    }
}