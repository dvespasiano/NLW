"use strict";
exports.__esModule = true;
var react_1 = require("react");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var Home = function () {
    var navigation = native_1.useNavigation();
    function handleNavigationPoints() {
        navigation.navigate('Points');
    }
    return (react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../../../assets/home-background.png'), style: styles.container, imageStyle: { width: 274, height: 368 } },
        react_1["default"].createElement(react_native_1.View, { style: styles.main },
            react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/logo.png') }),
            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Sua coleta de lixo inteligente"),
            react_1["default"].createElement(react_native_1.Text, { style: styles.description }, "Ajudamos pessoas com recolhimento de lixo inteligente")),
        react_1["default"].createElement(react_native_1.View, { style: styles.footer },
            react_1["default"].createElement(react_native_gesture_handler_1.RectButton, { style: styles.button, onPress: handleNavigationPoints },
                react_1["default"].createElement(react_native_1.View, { style: styles.buttonIcon },
                    react_1["default"].createElement(react_native_1.Text, null,
                        react_1["default"].createElement(vector_icons_1.Feather, { name: "arrow-right", color: "#fff", size: 24 }))),
                react_1["default"].createElement(react_native_1.Text, { style: styles.buttonText }, "Entrar")))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        padding: 32
    },
    main: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        color: '#322153',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 64
    },
    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24
    },
    footer: {},
    select: {},
    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16
    },
    button: {
        backgroundColor: '#34CB79',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8
    },
    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16
    }
});
exports["default"] = Home;
