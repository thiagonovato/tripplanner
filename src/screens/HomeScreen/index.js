import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'

import assets from './asset'
import styles from './styles'

class HomeScreen extends Component {

    state = {
        show: true
    }

    handleCounter = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}
            >
                <View style={styles.wrapperLogoTripPlanner}>
                    <Image source={assets.trippPlanner} />
                </View>
                <View style={styles.wrapperLogoDevPleno}>
                    <Image source={assets.devpleno} />
                </View>
                {
                    !this.state.show ?
                        <TouchableWithoutFeedback onPress={this.handleCounter}>
                            <View style={styles.buttonBackGround}>
                                <Text style={styles.buttonText}>COMEÇAR!</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        :
                        <TouchableWithoutFeedback onPress={this.handleCounter}>
                            <View style={styles.buttonEmptyStateBackGround}>
                                <Image source={assets.pin} style={styles.pin} />
                                <Text style={styles.buttonEmptyStateText}>Vamos planejar sua primeira viagem?</Text>
                                <Image source={assets.arrow} style={styles.arrow} />
                            </View>
                        </TouchableWithoutFeedback>
                }
            </ImageBackground>
        )
    }
}

export default HomeScreen