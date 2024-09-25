import { Text, StyleSheet } from "react-native";
import { CustomFonts } from "../../shared/fonts";

type TitleProps = {
    text?: string;
}

export default function Title({text}: TitleProps) {
    const loaded = CustomFonts();
    if (!loaded) {
        return null;
    }
    return (
        <Text style={styles.text}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'svnNexa',
        fontSize: 35,
        fontWeight: 900,
        lineHeight: 100,
        color: '#C71A1A'
    }
})