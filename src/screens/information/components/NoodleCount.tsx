import { View, Image, StyleSheet, Text } from "react-native"
import { CustomFonts } from "../../../shared/fonts"

type NoodleCountProps = {
    img?: number,
    text?: string
}

export default function  NoodleCount({img, text}:NoodleCountProps) {
    const loaded = CustomFonts();
    if (!loaded) return null;
    return (
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Image source={img} style={styles.img}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 120,
        height: 120,
        borderRadius: 10,
        resizeMode: 'contain',
        marginHorizontal: 5
    },
    text: {
        fontFamily: 'PaytoneOne',
        fontSize: 15,
        color: '#A09A9A'
    }
})