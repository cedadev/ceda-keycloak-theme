function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

import * as React from "../../../keycloak.v2/web_modules/react.js";
import { AccountServiceContext } from "../../account-service/AccountServiceContext.js";

export class ServicesLink extends React.Component {
  constructor(props, context) {
    super(props);
    this.context = context;
  }
  render() {
    window.location.replace('https://services-beta.ceda.ac.uk/services/my_services/')
  }
}
_defineProperty(ServicesLink, "contextType", AccountServiceContext);
;

export class FtpLink extends React.Component {
  constructor(props, context) {
    super(props);
    this.context = context;
  }
  render() {
    window.location.replace('https://services-beta.ceda.ac.uk/account/token/')
  }
}
_defineProperty(FtpLink, "contextType", AccountServiceContext);
;

export class TokenLink extends React.Component {
  constructor(props, context) {
    super(props);
    this.context = context;
  }
  render() {
    window.location.replace('https://services-beta.ceda.ac.uk/account/token/')
  }
}
_defineProperty(TokenLink, "contextType", AccountServiceContext);
;

export class JasminLink extends React.Component {
  constructor(props, context) {
    super(props);
    this.context = context;
  }
  render() {
    window.location.replace('https://services-beta.ceda.ac.uk/account/jasmin/')
  }
}
_defineProperty(JasminLink, "contextType", AccountServiceContext);
;

//# sourceMappingURL=ServicesPage.js.map