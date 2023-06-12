export class CodebookEntry {
  private _key: string;
  private _label: string;
  private _attributes: unknown;
  private _entryOrder: number;

  get key(): string {
    return this._key;
  }

  get label(): string {
    return this._label;
  }

  get attributes(): unknown {
    return this._attributes;
  }

  get entryOrder(): number {
    return this._entryOrder;
  }

  constructor(
    key: string,
    label: string,
    attributes: unknown = null,
    entryOrder = 0,
  ) {
    this._key = key;
    this._label = label;
    this._attributes = attributes;
    this._entryOrder = entryOrder;
  }
}
