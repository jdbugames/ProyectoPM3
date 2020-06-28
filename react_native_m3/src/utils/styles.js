import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
    },
    loginContent : {
      flex : 1,
      justifyContent : 'center'
    },
    loginBody : {
      paddingVertical : 30
    },
    textCenter : {
      textAlign : 'center',
      width : '100%'
    },
    loginBoton : {
      marginLeft : '40%'
    },
    movieImageSize : {
      width: 150, 
      height: 150
    },
    buttomCenter : {
        padding : 10,
        marginLeft : '40%'
    },
    headerContent : {
        flex : 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle : {
        color: 'white', 
        textAlign: 'center',
        paddingVertical : 10
    },
    totalScreen : {
      width : '100%', 
      height : '100%'
    },
    spinner : {
      width : 200,
      height : 150
    }
})

export default styles