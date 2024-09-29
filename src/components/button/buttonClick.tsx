import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CustomFonts } from "../../shared/fonts";

type ButtonProps  = {
    text?: string;
    onClick?:() => void;
}

export default function ButtonClick({text, onClick }: ButtonProps) {
    const loaded = CustomFonts();
    if (!loaded) return null;
    return (
        <TouchableOpacity style={styles.button} onPress={onClick} >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFB906',
        borderRadius: 30, 
        paddingVertical: 15, 
        paddingHorizontal: 60, 
        shadowColor: '#FFFFFF', 
        shadowOffset: { 
            width: 4, 
            height: 4 
        }, 
        shadowOpacity: 1, 
        shadowRadius: 0, 
        elevation: 5, 
    },
    text: {
        fontFamily: 'PaytoneOne',
        color: '#A31616', 
        fontSize: 18, 
        fontWeight: 'bold',
    },
})