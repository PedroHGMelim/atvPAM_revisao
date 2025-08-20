import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function InitialScreen({ navigation }) {

    return (
        <View style={styles.container}>
            
            <Image style={{height: '40%', width: '100%'}} source={require('../assets/casual_dog.jpg')}/>

            <Text style={{fontSize: 35, margin: 10, color: "#000000"}}>Ótimo dia!</Text>
      
            <Text style={{fontSize: 15, margin: 5, color: "#000000"}}>Como deseja acessar?</Text>

            <TouchableOpacity style={{display: "flex", flexDirection: "row", marginTop: 20, alignItems: "center", backgroundColor: "#43d38d", borderRadius: 10, width: 300, height: 60}} onPress={() => {navigation.navigate("Login");}}>
            
                <View style={{borderRadius: 5, height: 45, margin: 10, width: 45, backgroundColor: "#f0f0f0"}}>

                    <Image style={{ height: 45, width: 45}} source={require('../assets/google.jpg')}/>
            
                </View>

                <Text style={{fontSize: 15, margin: 10, color: "#ffffff"}}>Como deseja acessar?</Text>
        
            </TouchableOpacity>

            <TouchableOpacity style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20, flexDirection: "row", backgroundColor: "#ffffff", borderWidth: 1.5, borderColor: "#43d38d", borderRadius: 10, width: 300, height: 60}}>
                <Text style={{fontSize: 15, color: "#000000"}}>Outras opções</Text>
            </TouchableOpacity>
    
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
    },

    buttonContainer: {
        margin: 10, 
        width: windowWidth * 0.5,
        borderRadius: 5,
        borderRadius: '15px',
    },

    button: {
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#0096FF',
    }
});