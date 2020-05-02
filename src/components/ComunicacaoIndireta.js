import React from 'react'
import { View, Text, TextInput } from 'react-native'
import main from '../style/main'

export const Entrada = props =>
    <View>
        <TextInput value={props.texto}
            style={main.input}
            onChangeText={props.chamarQuandoMudar} />
    </View>

export class TextoSincronizado extends React.Component {

    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({ texto })
    }

    render() {
        return (
            <View>
                <Text style={main.fonte40}>{this.state.texto}</Text>
                <Entrada texto={this.state.texto}
                    chamarQuandoMudar={this.alterarTexto} />
            </View>
        )
    }
}