/**
 * @generated SignedSource<<5d11619172ffec691ea1817c3ee0293d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type LoginUserInput = {
  password: string;
  tax_id: string;
};
export type loginFormMutation$variables = {
  input: LoginUserInput;
};
export type loginFormMutation$data = {
  readonly login: {
    readonly token: string;
    readonly user: {
      readonly id: string;
      readonly name: string;
      readonly tax_id: string;
    };
  } | null | undefined;
};
export type loginFormMutation = {
  response: loginFormMutation$data;
  variables: loginFormMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AuthReturnPayload",
    "kind": "LinkedField",
    "name": "login",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tax_id",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "loginFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "loginFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "00dbec8724474838db60781de87edc19",
    "id": null,
    "metadata": {},
    "name": "loginFormMutation",
    "operationKind": "mutation",
    "text": "mutation loginFormMutation(\n  $input: LoginUserInput!\n) {\n  login(input: $input) {\n    user {\n      id\n      name\n      tax_id\n    }\n    token\n  }\n}\n"
  }
};
})();

(node as any).hash = "0968b3940ac2c1797317b67f81351065";

export default node;
