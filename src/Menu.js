import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from "./components/Simples"
import Parimpar from "./components/Parimpar"
import { Inverter, MegaSena } from "./components/Multi"
import Contador from "./components/Contador"
import Plataformas from "./components/Plataformas"
import ValidarProps from "./components/ValidarProps"
import Evento from "./components/Evento"
import { Avo } from './components/ComunicacaoDireta'
import { TextoSincronizado } from './components/ComunicacaoIndireta'
import ListaFlex from './components/ListaFlex'
import Flex from './components/Flex'

export default createDrawerNavigator({
    Flex: {
        screen: Flex,
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: 'Lista Flex' }
    },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: 'Texto Sincronizado' }
    },
    Avo: {
        screen: () => <Avo nome="Luciano" sobrenome="Zangeronimo" />
    },
    Evento: {
        screen: () => <Evento />
    },
    ValidarProps: {
        screen: () => <ValidarProps label="Teste: " ano={18} />
    },
    Plataformas: {
        screen: () => <Plataformas />
    },
    Contador:{
        screen: () => <Contador />
    },
    MegaSena: {
        screen: () => <MegaSena numbers={6} />,
        navigationOptions: { title: 'Mega Senha' }
    },
    Inverter: {
        screen: () => <Inverter text="React Native!" />
    },
    Parimpar: {
        screen:  () => <Parimpar number={30} />,
        navigationOptions: { title: 'Par & Ímpar' }
    },
    Simples: {
        screen: () => <Simples label="Flexible!!!" />
    }
}, { drawerWidth: 300})