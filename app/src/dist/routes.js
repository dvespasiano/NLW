"use strict";
exports.__esModule = true;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var stack_1 = require("@react-navigation/stack");
var Home_1 = require("./pages/Home");
var Points_1 = require("./pages/Points");
var Detail_1 = require("./pages/Detail");
var AppStack = stack_1.createStackNavigator();
var Routes = function () {
    return (react_1["default"].createElement(native_1.NavigationContainer, null,
        react_1["default"].createElement(AppStack.Navigator, { headerMode: 'none', screenOptions: {
                cardStyle: {
                    backgroundColor: '#f0f0f5'
                }
            } },
            react_1["default"].createElement(AppStack.Screen, { name: "Home", component: Home_1["default"] }),
            react_1["default"].createElement(AppStack.Screen, { name: "Points", component: Points_1["default"] }),
            react_1["default"].createElement(AppStack.Screen, { name: "Detail", component: Detail_1["default"] }))));
};
exports["default"] = Routes;
