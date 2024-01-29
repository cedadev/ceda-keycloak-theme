function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * Copyright 2018 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "../keycloak.v2/web_modules/react.js";
import { PageNav } from "./PageNav.js";
import { PageHeaderTool } from "./PageHeaderTool.js";
import { makeRoutes } from "./ContentPages.js";
import { Brand, Page, PageHeader, PageSidebar } from "../keycloak.v2/web_modules/@patternfly/react-core.js";
import { KeycloakContext } from "./keycloak-service/KeycloakContext.js";
;
export class App extends React.Component {
  constructor(props, context) {
    super(props);
    _defineProperty(this, "context", void 0);
    this.context = context;
    toggleReact();
  }
  render() {
    toggleReact();

    // check login
    if (!this.context.authenticated() && !isWelcomePage()) {
      this.context.login();
    }
    const Header = /*#__PURE__*/React.createElement(PageHeader, {
      logo: React.createElement("div", { className: "cedaPageHeader"
      }, /*#__PURE__*/React.createElement("a", {
        id: "brandLink",
        href: brandUrl
      }, /*#__PURE__*/React.createElement(Brand, {
        src: brandImg,
        alt: "Logo",
        className: "brand"
      })),
      React.createElement("div", null,
        React.createElement("ul", null,
          React.createElement("li", null,
            React.createElement("a", { href: "https://catalogue.ceda.ac.uk" }, "Search Catalogue"),
          ),
          React.createElement("li", null,
            React.createElement("a", { href: "https://data.ceda.ac.uk" }, "Get Data"),
          ),
          React.createElement("li", null,
            React.createElement("a", { href: "https://help.ceda.ac.uk" }, "Help"),
          ),
          React.createElement("li", null,
            React.createElement("a", { href: "https://archive.ceda.ac.uk/tools" }, "Tools"),
          ),
          React.createElement("li", null,
            React.createElement("a", { href: "https://arrivals.ceda.ac.uk" }, "Deposit"),
          ),
          React.createElement("li", null,
            React.createElement("a", { href: "https://ceda.ac.uk/blog" }, "News")
          )
        )
      )
      ),
      headerTools: /*#__PURE__*/React.createElement(PageHeaderTool, null),
      showNavToggle: false
    });
    const Sidebar = /*#__PURE__*/React.createElement(PageSidebar, {
      nav: /*#__PURE__*/React.createElement(PageNav, null)
    });
    return /*#__PURE__*/React.createElement(Page, {
      header: Header,
      sidebar: Sidebar,
      isManagedSidebar: true
    }, makeRoutes());
  }
}
_defineProperty(App, "contextType", KeycloakContext);
;
//# sourceMappingURL=App.js.map