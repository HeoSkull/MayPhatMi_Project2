import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import { CustomFonts } from "../../shared/fonts";

type ButtonProps  = {
    text?: string;
    onClick?:() => void;
}

export default function ButtonClick({text, onClick }: ButtonProps) {
    const loaded = CustomFonts();
    if (!loaded) return null;
    return (
        <TouchableOpacity onPress={onClick} >
            <View style={styles.container}>
                <Image source ={require('../../../assets/Button.png')} style={styles.buttonImg} />
                <Text style={styles.text}>{text}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    buttonImg: {
        width: 300,
        resizeMode: 'contain',
    },
    text: {
        fontFamily: 'PaytoneOne',
        color: '#A31616', 
        fontSize: 18, 
        fontWeight: 'bold',
        position: 'absolute',
        textAlign: 'center'
    },
})