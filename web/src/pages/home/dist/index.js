"use strict";
exports.__esModule = true;
var react_1 = require("react");
var logo_svg_1 = require("../../assets/logo.svg");
require("./styles.css");
var fi_1 = require("react-icons/fi");
var react_router_dom_1 = require("react-router-dom");
var Home = function () {
    return (react_1["default"].createElement("div", { id: "page-home" },
        react_1["default"].createElement("div", { className: "content" },
            react_1["default"].createElement("header", null,
                react_1["default"].createElement("img", { src: logo_svg_1["default"], alt: "Colete meu Lixo" })),
            react_1["default"].createElement("main", null,
                react_1["default"].createElement("h1", null, "Sua coleta de lixo inteligente"),
                react_1["default"].createElement("p", null, "Ajudamos as pessoas a saberem quando e onde seu lixo ser\u00E1 coletado."),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/create-point" },
                    react_1["default"].createElement("span", null,
                        react_1["default"].createElement(fi_1.FiLogIn, null)),
                    react_1["default"].createElement("strong", null, "Marque seu ponto de coleta"))))));
};
exports["default"] = Home;
