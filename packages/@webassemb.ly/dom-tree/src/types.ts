export type VDOMNode = {
  namespace: string,
  tag: string,
  attributes?: VDOMAttributes,
  children?: VDOMChildren,
}

export type VDOMAttributes = {
  [key: string]: any,
}

export type VDOMChildren = string | Array<string | VDOMNode>;

export type VDOMParams =
  | [VDOMAttributes, VDOMChildren]
  | [VDOMAttributes]
  | [VDOMChildren]
  | [];
