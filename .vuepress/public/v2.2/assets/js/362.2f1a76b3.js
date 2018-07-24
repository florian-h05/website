(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{692:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),n("AddonLogo"),n("p",[t._v("Monitor and control Anel NET-PwrCtrl devices.")]),n("table",[n("thead",[n("tr",[n("th",[n("a",{attrs:{href:"http://anel-elektronik.de/SITE/produkte/hut/hut.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Anel NET-PwrCtrl HUT"),n("OutboundLink")],1)]),n("th",[n("a",{attrs:{href:"http://anel-elektronik.de/SITE/produkte/io/io.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Anel NET-PwrCtrl IO"),n("OutboundLink")],1)]),n("th",[n("a",{attrs:{href:"http://anel-elektronik.de/SITE/produkte/home/home.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Anel NET-PwrCtrl HOME"),n("OutboundLink")],1)])])]),n("tbody",[n("tr",[n("td",[n("a",{attrs:{href:"http://anel-elektronik.de/SITE/produkte/hut/hut.htm",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"http://anel-elektronik.de/SITE/image/leisten/HUT-120.gif",alt:"Anel NET-PwrCtrl HUT"}}),n("OutboundLink")],1)]),n("td",[n("a",{attrs:{href:"http://anel-elektronik.de/SITE/produkte/io/io.htm",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"http://anel-elektronik.de/SITE/image/leisten/PRO-120.gif",alt:"Anel NET-PwrCtrl PRO"}}),n("OutboundLink")],1)]),n("td",[n("a",{attrs:{href:"http://anel-elektronik.de/SITE/produkte/home/home.htm",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"http://anel-elektronik.de/SITE/image/leisten/HOME-DE-120.gif",alt:"Anel NET-PwrCtrl HOME"}}),n("OutboundLink")],1)])])])]),n("p",[t._v("NET-PwrCtrl devices are power sockets / relays that can be configured via browser but they can also be controlled over the network, e.g. with an Android or iPhone app - and also with openHAB via this binding.\nThe NET-PwrCtrl HUT and NET-PwrCtrl IO also have 8 I/O pins which can either be used to directly switch the sockets, or they can be used as general input switches in openHAB.\nHere is a video demonstrating a switch and a dimmer (voice is German), explanation of the setup is given in the diagram below:")]),n("p",[n("a",{attrs:{href:"http://www.youtube.com/watch?v=31ycP53jZVs",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"http://img.youtube.com/vi/31ycP53jZVs/0.jpg",alt:"Anel example"}}),n("OutboundLink")],1)]),n("p",[n("a",{attrs:{href:"http://2.bp.blogspot.com/-XbiK9Fe1Ek0/VFPc2lwMKeI/AAAAAAAABDM/wEdTETUfo0w/s1600/Anel-demo-setup.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("Anel demo setup"),n("OutboundLink")],1)]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),n("p",[t._v("There are different types of item bindings, all of them are qualified with the device's identifier used in the binding configuration:")]),n("p",[t._v("The device's name is a string type, the device's temperature is a number:")]),t._m(8),n("p",[t._v("The actual relay states are also switchable if they are not locked.\nNote that the locked states and the relay's names are read-only.")]),t._m(9),n("p",[t._v("The I/O states are only switchable if they are configured as 'input' (point of view of the anel device), otherwise they are read-only.\nAgain, the names are also read-only.")]),t._m(10),t._m(11),n("p",[t._v("General format and full list of binding items:")]),t._m(12),t._m(13),t._m(14),n("p",[t._v("Although the device's configuration can be used to directly switch a relay with an input channel, the very same can be done with this rule:")]),t._m(15),n("p",[t._v("An input channel can also be used as a push button (also demonstrated in the "),n("a",{attrs:{href:"http://www.youtube.com/watch?v=31ycP53jZVs",target:"_blank",rel:"noopener noreferrer"}},[t._v("video"),n("OutboundLink")],1),t._v("):")]),t._m(16),n("p",[t._v("In combination with the "),n("a",{attrs:{href:"https://github.com/openhab/openhab/wiki/Milight-Binding",target:"_blank",rel:"noopener noreferrer"}},[t._v("MiLight Binding"),n("OutboundLink")],1),t._v(", this rule uses I/O 3 as dimmer for MiLight bulb "),n("code",[t._v("milight_zone1")]),t._v(" (also demonstrated in the "),n("a",{attrs:{href:"http://www.youtube.com/watch?v=31ycP53jZVs",target:"_blank",rel:"noopener noreferrer"}},[t._v("video"),n("OutboundLink")],1),t._v(").")]),n("p",[t._v("As long as I/O 3 is pressed, the bulb dims up until its brightness reaches 100%.")]),t._m(17),n("DocPreviousVersions"),n("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"anel-net-pwrctrl-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#anel-net-pwrctrl-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Anel NET-PwrCtrl Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note that the binding is still untested for other devices than the "),e("em",[this._v("NET-PwrCtrl HUT")]),this._v(", because I do not own any of the others. I suppose the binding works well with the "),e("em",[this._v("NET-PwrCtrl IO")]),this._v(" because it has the same features, but it may not yet work for the others!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The binding can be configured in the file "),e("code",[this._v("services/anel.cfg")]),this._v(".  In the table below, "),e("code",[this._v("<name>")]),this._v(" must be an identifier that is also used for the item bindings.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Key")]),n("th",[t._v("Default")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[n("code",[t._v("<name>.host")])]),n("td",[t._v("net-control")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("recommended")]),n("td",[t._v("IP or network address")])]),n("tr",[n("td",[n("code",[t._v("<name>.udpReceivePort")])]),n("td",[t._v("77")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),n("td",[t._v("UDP receive port")])]),n("tr",[n("td",[n("code",[t._v("<name>.udpSendPort")])]),n("td",[t._v("75")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),n("td",[t._v("UDP send port")])]),n("tr",[n("td",[n("code",[t._v("<name>.user")])]),n("td",[t._v("user7")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),n("td",[t._v("User name")])]),n("tr",[n("td",[n("code",[t._v("<name>.password")])]),n("td",[t._v("anel")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),n("td",[t._v("Password")])]),n("tr",[n("td",[n("code",[t._v("refresh")])]),n("td",[t._v("60000")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),n("td",[t._v("Global refresh interval in milliseconds")])]),n("tr",[n("td",[n("code",[t._v("cachePeriod")])]),n("td",[t._v("0")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),n("td",[t._v("Cache the state for "),n("code",[t._v("cachePeriod")]),t._v(" minutes so only changes are posted (optional, defaults to 0 = disabled).  Example: if period is 60, once per hour all states are posted to the event bus; changes are always and immediately posted to the event bus.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("At least one option must be set for an identifier for the binding to work.")]),e("li",[this._v("The most obvious and important option is "),e("code",[this._v("host")]),this._v(", it is in fact mandatory if multiple devices are used.")]),e("li",[this._v("The host name, ports, and credentials are device-specific settings that must be configured via the device's browser interface.")]),e("li",[this._v("Port numbers above 1024 are recommended because ports below 1024 are typically reserved and their access restricted on some devices/networks.")]),e("li",[this._v("For multiple devices, different ports must be used.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("anelName")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Anel1 network name [%s]"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" anel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"anel1:NAME"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("anelTemperature")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Anel1 temperature [%s]"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" anel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"anel1:TEMPERATURE"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("f1")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" anel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"anel1:F1"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"false"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("f1name")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" anel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"anel1:F1NAME"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("f1locked")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" anel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"anel1:F1LOCKED"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("io1")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" anel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"anel1:IO1"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("io1name")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" anel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"anel1:IO1NAME"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("io1isinput")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" anel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"anel1:IO8ISINPUT"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Note: "),e("strong",[this._v("all read-only properties must be configured via the device's browser interface.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('anel="<identifier>:<item>"\n')])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("item")]),n("th",[t._v("item type")]),n("th",[t._v("purpose")]),n("th",[t._v("changeable")])])]),n("tbody",[n("tr",[n("td",[n("code",[t._v("NAME")])]),n("td",[t._v("String")]),n("td",[t._v("device's name")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("TEMPERATURE")])]),n("td",[t._v("Number")]),n("td",[t._v("device's temperature")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F1NAME")])]),n("td",[t._v("String")]),n("td",[t._v("name of relay 1")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F2NAME")])]),n("td",[t._v("String")]),n("td",[t._v("name of relay 2")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F3NAME")])]),n("td",[t._v("String")]),n("td",[t._v("name of relay 3")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F4NAME")])]),n("td",[t._v("String")]),n("td",[t._v("name of relay 4")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F5NAME")])]),n("td",[t._v("String")]),n("td",[t._v("name of relay 5")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F6NAME")])]),n("td",[t._v("String")]),n("td",[t._v("name of relay 6")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F7NAME")])]),n("td",[t._v("String")]),n("td",[t._v("name of relay 7")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F8NAME")])]),n("td",[t._v("String")]),n("td",[t._v("name of relay 8")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F1LOCKED")])]),n("td",[t._v("Switch")]),n("td",[t._v("whether or not relay 1 is locked")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F2LOCKED")])]),n("td",[t._v("Switch")]),n("td",[t._v("whether or not relay 2 is locked")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F3LOCKED")])]),n("td",[t._v("Switch")]),n("td",[t._v("whether or not relay 3 is locked")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F4LOCKED")])]),n("td",[t._v("Switch")]),n("td",[t._v("whether or not relay 4 is locked")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F5LOCKED")])]),n("td",[t._v("Switch")]),n("td",[t._v("whether or not relay 5 is locked")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F6LOCKED")])]),n("td",[t._v("Switch")]),n("td",[t._v("whether or not relay 6 is locked")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F7LOCKED")])]),n("td",[t._v("Switch")]),n("td",[t._v("whether or not relay 7 is locked")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F8LOCKED")])]),n("td",[t._v("Switch")]),n("td",[t._v("whether or not relay 8 is locked")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("F1")])]),n("td",[t._v("Switch")]),n("td",[t._v("state of relay 1")]),n("td",[t._v("only if "),n("code",[t._v("F1LOCKED = OFF")])])]),n("tr",[n("td",[n("code",[t._v("F2")])]),n("td",[t._v("Switch")]),n("td",[t._v("state of relay 2")]),n("td",[t._v("only if "),n("code",[t._v("F2LOCKED = OFF")])])]),n("tr",[n("td",[n("code",[t._v("F3")])]),n("td",[t._v("Switch")]),n("td",[t._v("state of relay 3")]),n("td",[t._v("only if "),n("code",[t._v("F3LOCKED = OFF")])])]),n("tr",[n("td",[n("code",[t._v("F4")])]),n("td",[t._v("Switch")]),n("td",[t._v("state of relay 4")]),n("td",[t._v("only if "),n("code",[t._v("F4LOCKED = OFF")])])]),n("tr",[n("td",[n("code",[t._v("F5")])]),n("td",[t._v("Switch")]),n("td",[t._v("state of relay 5")]),n("td",[t._v("only if "),n("code",[t._v("F5LOCKED = OFF")])])]),n("tr",[n("td",[n("code",[t._v("F6")])]),n("td",[t._v("Switch")]),n("td",[t._v("state of relay 6")]),n("td",[t._v("only if "),n("code",[t._v("F6LOCKED = OFF")])])]),n("tr",[n("td",[n("code",[t._v("F7")])]),n("td",[t._v("Switch")]),n("td",[t._v("state of relay 7")]),n("td",[t._v("only if "),n("code",[t._v("F7LOCKED = OFF")])])]),n("tr",[n("td",[n("code",[t._v("F8")])]),n("td",[t._v("Switch")]),n("td",[t._v("state of relay 8")]),n("td",[t._v("only if "),n("code",[t._v("F8LOCKED = OFF")])])]),n("tr",[n("td",[n("code",[t._v("IO1NAME")])]),n("td",[t._v("String")]),n("td",[t._v("name of I/O 1")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("IO2NAME")])]),n("td",[t._v("String")]),n("td",[t._v("name of I/O 2")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("IO3NAME")])]),n("td",[t._v("String")]),n("td",[t._v("name of I/O 3")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("IO4NAME")])]),n("td",[t._v("String")]),n("td",[t._v("name of I/O 4")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("IO5NAME")])]),n("td",[t._v("String")]),n("td",[t._v("name of I/O 5")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("IO6NAME")])]),n("td",[t._v("String")]),n("td",[t._v("name of I/O 6")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("IO7NAME")])]),n("td",[t._v("String")]),n("td",[t._v("name of I/O 7")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("IO8NAME")])]),n("td",[t._v("String")]),n("td",[t._v("name of I/O 8")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("IO1ISINPUT")])]),n("td",[t._v("Switch")]),n("td",[t._v("whether I/O 1 is input")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("IO2ISINPUT")])]),n("td",[t._v("Switch")]),n("td",[t._v("whether I/O 2 is input")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("IO3ISINPUT")])]),n("td",[t._v("Switch")]),n("td",[t._v("whether I/O 3 is input")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("IO4ISINPUT")])]),n("td",[t._v("Switch")]),n("td",[t._v("whether I/O 4 is input")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("IO5ISINPUT")])]),n("td",[t._v("Switch")]),n("td",[t._v("whether I/O 5 is input")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("IO6ISINPUT")])]),n("td",[t._v("Switch")]),n("td",[t._v("whether I/O 6 is input")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("IO7ISINPUT")])]),n("td",[t._v("Switch")]),n("td",[t._v("whether I/O 7 is input")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("IO8ISINPUT")])]),n("td",[t._v("Switch")]),n("td",[t._v("whether I/O 8 is input")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("IO1")])]),n("td",[t._v("Switch")]),n("td",[t._v("state of I/O 1")]),n("td",[t._v("only if "),n("code",[t._v("IO1ISINPUT = ON")])])]),n("tr",[n("td",[n("code",[t._v("IO2")])]),n("td",[t._v("Switch")]),n("td",[t._v("state of I/O 2")]),n("td",[t._v("only if "),n("code",[t._v("IO2ISINPUT = ON")])])]),n("tr",[n("td",[n("code",[t._v("IO3")])]),n("td",[t._v("Switch")]),n("td",[t._v("state of I/O 3")]),n("td",[t._v("only if "),n("code",[t._v("IO3ISINPUT = ON")])])]),n("tr",[n("td",[n("code",[t._v("IO4")])]),n("td",[t._v("Switch")]),n("td",[t._v("state of I/O 4")]),n("td",[t._v("only if "),n("code",[t._v("IO4ISINPUT = ON")])])]),n("tr",[n("td",[n("code",[t._v("IO5")])]),n("td",[t._v("Switch")]),n("td",[t._v("state of I/O 5")]),n("td",[t._v("only if "),n("code",[t._v("IO5ISINPUT = ON")])])]),n("tr",[n("td",[n("code",[t._v("IO6")])]),n("td",[t._v("Switch")]),n("td",[t._v("state of I/O 6")]),n("td",[t._v("only if "),n("code",[t._v("IO6ISINPUT = ON")])])]),n("tr",[n("td",[n("code",[t._v("IO7")])]),n("td",[t._v("Switch")]),n("td",[t._v("state of I/O 7")]),n("td",[t._v("only if "),n("code",[t._v("IO7ISINPUT = ON")])])]),n("tr",[n("td",[n("code",[t._v("IO8")])]),n("td",[t._v("Switch")]),n("td",[t._v("state of I/O 8")]),n("td",[t._v("only if "),n("code",[t._v("IO8ISINPUT = ON")])])]),n("tr",[n("td",[n("code",[t._v("SENSOR_TEMPERATURE")])]),n("td",[t._v("Number")]),n("td",[t._v("sensor temperature (device firmware >= 6.1)")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("SENSOR_HUMIDITY")])]),n("td",[t._v("Number")]),n("td",[t._v("sensor humidity (device firmware >= 6.1)")]),n("td",[t._v("no")])]),n("tr",[n("td",[n("code",[t._v("SENSOR_BRIGHTNESS")])]),n("td",[t._v("Number")]),n("td",[t._v("sensor brightness (device firmware >= 6.1)")]),n("td",[t._v("no")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-rules","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Rules")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rules"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"regular switch on Anel1 IO1 input for relay 1"')]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" io1 "),n("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f1"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" io1"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rules"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"push button switch on Anel1 IO2 input for relay 2"')]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" io2 "),n("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("ON")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f2"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f2"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("ON")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("ON")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("OFF")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rules"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openhab"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("script"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("actions"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Timer timer2\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"switch dimmer on Anel1 IO3"')]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" io3 "),n("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("OFF")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("milight_zone1"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    timer2 "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("createTimer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("plusMillis")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("333")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("int")]),t._v(" newValue "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("milight_zone1"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),n("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("DecimalType")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("intValue")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("5")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newValue "),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("100")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            timer2 "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("null")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer2 "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("null")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("milight_zone1"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newValue"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("io3"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("OFF")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                timer2"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("reschedule")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("plusMillis")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("333")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);e.default=a.exports}}]);