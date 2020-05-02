import React from 'react'
import { Text } from 'react-native'

import main from '../style/main'

export default props =>
    <Text style={[main.ex]}>{props.label}</Text>