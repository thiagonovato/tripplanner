import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 16
    },
    wrapperinfo: { flex: 1 },
    itemName: {
        fontWeight: 'bold',
        fontSize: 18
    },
    wrapperItemPrice: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 16
    },
    itemPrice: {
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold'
    },
    wrapper: {
        flex: 1
    },
    header: {
        backgroundColor: 'grey',
        height: 192
    },
    backButton: {
        position: 'absolute',
        left: 16,
        bottom: 16
    },
    tripName: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        textAlign: 'right',
        backgroundColor: 'blue',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 4,
        paddingRight: 4,
        color: 'white'
    },
    tripPrice: {
        position: 'absolute',
        top: 5,
        left: 5,
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
})

export default styles