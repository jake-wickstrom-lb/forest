abstract class Equalities<U> {
  /**
   * @param a 
   * @param b 
   * @returns true if a is less than b, false otherwise
   */
  abstract _lt(a: U, b: U): boolean
  
  /**
   * @param a 
   * @param b 
   * @returns true if a is less than or equal to b, false otherwise
   */
  abstract _lte(a: U, b: U): boolean

  /**
   * @param a 
   * @param b 
   * @returns true if a is equal to b, false otherwise
   */
  abstract _equals(a: U, b: U): boolean
  
  
  /**
   * @param a 
   * @param b 
   * @returns true if a is greater than or equal to b, false otherwise
   */
  abstract _gte(a: U, b: U): boolean

  /**
   * @param a 
   * @param b 
   * @returns true if a is greater than or equal to b, false otherwise
   */
  abstract _gt(a: U, b: U): boolean
}

/**
 * A convenience class which internally defines inequalities based on a definition
 * for the less-than inequality. 
 * 
 * This is not the most efficient way to compare entities (the computed methods take multiple calls when one would often do),
 * but it is simple to de
 */
export class AdaptiveEqualities<U> implements Equalities<U> {
  // defininition of the less-than operator
  protected __lt: (a: U, b: U) => boolean
  
  constructor(lt: (a: U, b: U) => boolean) {
    this.__lt = lt
  }

  _lt(a: U, b: U): boolean {
    return this.__lt(a, b)
  }

  _lte(a: U, b: U): boolean {
    return this._lt(a, b) || this._equals(a, b)
  }

  _equals(a: U, b: U): boolean {
    // if a is not less than b, AND b is not less than a, then a and b must be equal
    return !this._lt(a, b) && !this._lt(b, a)
  }

  _gte(a: U, b: U): boolean {
    return this._gt(a, b) || this._equals(a, b)
  }

  _gt(a: U, b: U): boolean {
    return !this._lte(a, b)
  }

}