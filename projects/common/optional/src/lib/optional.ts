type Nothing = undefined | null;

export class Optional<TValue> {
  private readonly _value: TValue | Nothing;

  private constructor(value: TValue | Nothing) {
    this._value = value;
  }

  public static of<TOfValue>(value: TOfValue | Nothing): Optional<TOfValue> {
    return new Optional<TOfValue>(value);
  }

  public static empty<TEmptyValue>(): Optional<TEmptyValue> {
    return Optional.of<TEmptyValue>(undefined);
  }

  public static isPresent<T>(value: T | Nothing): value is T {
    return value !== undefined && value !== null;
  }

  public flatMap<TResult>(mapper: (value: TValue) => Optional<TResult>): Optional<TResult> {
    return Optional.isPresent(this._value)
      ? Optional.of<TResult>(mapper(this._value)
        .get())
      : Optional.empty<TResult>();
  }

  public map<TResult>(mapper: (value: TValue) => TResult | Nothing): Optional<TResult> {
    return this.flatMap<TResult>(
      (value) => Optional.of<TResult>(mapper(value))
    );
  }

  public filter(condition: (value: TValue) => boolean): Optional<TValue> {
    return this.flatMap<TValue>(
      (value) => Optional.of<TValue>(condition(value) ? value : undefined)
    );
  }

  public get(): TValue | Nothing {
    return this._value;
  }

  public isPresent(): boolean {
    return Optional.isPresent(this._value);
  }

  public ifPresent(callback: (value: TValue) => void): void {
    if (Optional.isPresent(this._value)) {
      callback(this._value);
    }
  }

  public orElse<TOther = TValue>(other: TOther): TValue | TOther {
    return Optional.isPresent(this._value)
      ? this._value
      : other;
  }

  public orElseGet<TOther = TValue>(callback: () => TOther): TValue | TOther {
    return Optional.isPresent(this._value)
      ? this._value
      : callback();
  }
}
