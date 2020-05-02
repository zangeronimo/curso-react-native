import React from 'react'
import { View, Text } from 'react-native'
import main from '../style/main'

function parOuImpar(num) {
    const v = num % 2 == 0 ? "Par" : "Ímpar"
    return <Text style={main.ex}>{v}</Text>
}

export default props =>
    <View>
        {parOuImpar(props.number)}
    </View>