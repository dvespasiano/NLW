"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var expo_constants_1 = require("expo-constants");
var native_1 = require("@react-navigation/native");
var react_native_maps_1 = require("react-native-maps");
var react_native_svg_1 = require("react-native-svg");
var Points = function () {
    var navigation = native_1.useNavigation();
    function handleNavigateBack() {
        navigation.goBack();
    }
    function handleNavigateToDetail() {
        navigation.navigate('Detail');
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.View, { style: styles.container },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleNavigateBack },
                react_1["default"].createElement(vector_icons_1.Feather, { name: "arrow-left", size: 20, color: "#34cb79" })),
            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Bem Vindo."),
            react_1["default"].createElement(react_native_1.Text, { style: styles.description }, "Solicite suas coletas e marque no mapa"),
            react_1["default"].createElement(react_native_1.View, { style: styles.mapContainer },
                react_1["default"].createElement(react_native_maps_1["default"], { style: styles.map, initialRegion: { latitude: 0, longitude: 0, latitudeDelta: 0.014, longitudeDelta: 0.014 } }),
                react_1["default"].createElement(react_native_maps_1.Marker, { style: styles.mapMarker, coordinate: { latitude: 0, longitude: 0 }, onPress: handleNavigateToDetail },
                    react_1["default"].createElement(react_native_1.View, { style: styles.mapMarkerContainer },
                        react_1["default"].createElement(react_native_1.Image, { style: styles.mapMarkerContainer, source: { uri: 'urlImagem' } }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.mapMarkerTitle }, "Mercado"))))),
        react_1["default"].createElement(react_native_1.View, { style: styles.itemsContainer },
            react_1["default"].createElement(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: { paddingHorizontal: 20 } },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.item },
                    react_1["default"].createElement(react_native_svg_1.SvgUri, { width: 42, height: 42, uri: "http://ipDoServidor/uploads/lampadas.svg" }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.itemTitle }, "lampadas")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.item },
                    react_1["default"].createElement(react_native_svg_1.SvgUri, { width: 42, height: 42, uri: "http://ipDoServidor/uploads/lampadas.svg" }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.itemTitle }, "lampadas")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.item },
                    react_1["default"].createElement(react_native_svg_1.SvgUri, { width: 42, height: 42, uri: "http://ipDoServidor/uploads/lampadas.svg" }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.itemTitle }, "lampadas")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.item },
                    react_1["default"].createElement(react_native_svg_1.SvgUri, { width: 42, height: 42, uri: "http://ipDoServidor/uploads/lampadas.svg" }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.itemTitle }, "lampadas")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.item },
                    react_1["default"].createElement(react_native_svg_1.SvgUri, { width: 42, height: 42, uri: "http://ipDoServidor/uploads/lampadas.svg" }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.itemTitle }, "lampadas")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.item },
                    react_1["default"].createElement(react_native_svg_1.SvgUri, { width: 42, height: 42, uri: "http://ipDoServidor/uploads/lampadas.svg" }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.itemTitle }, "lampadas")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.item },
                    react_1["default"].createElement(react_native_svg_1.SvgUri, { width: 42, height: 42, uri: "http://ipDoServidor/uploads/lampadas.svg" }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.itemTitle }, "lampadas"))))));
};
exports["default"] = Points;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20 + expo_constants_1["default"].statusBarHeight
    },
    title: {
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
        marginTop: 24
    },
    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 4,
        fontFamily: 'Roboto_400Regular'
    },
    mapContainer: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 16
    },
    map: {
        width: '100%',
        height: '100%'
    },
    mapMarker: {
        width: 90,
        height: 80
    },
    mapMarkerContainer: {
        width: 90,
        height: 70,
        backgroundColor: '#34CB79',
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center'
    },
    mapMarkerImage: {
        width: 90,
        height: 45,
        resizeMode: 'cover'
    },
    mapMarkerTitle: {
        flex: 1,
        fontFamily: 'Roboto_400Regular',
        color: '#FFF',
        fontSize: 13,
        lineHeight: 23
    },
    itemsContainer: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 32
    },
    item: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#eee',
        height: 120,
        width: 120,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center'
    },
    selectedItem: {
        borderColor: '#34CB79',
        borderWidth: 2
    },
    itemTitle: {
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        fontSize: 13
    }
});
