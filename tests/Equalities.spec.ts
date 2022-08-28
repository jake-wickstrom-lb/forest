import { AdaptiveEqualities } from "src/Equalities"

describe("AdaptiveEqualities", () => {
  let lt: (a: number, b: number) => boolean = (a, b) => {return a < b}
  let AE = new AdaptiveEqualities(lt)

  describe("handles the lt operation", () => {

    test("0 < 1", () => {
      expect(AE._lt(0, 1)).toBeTruthy()
    })

    test("1 < 0 fails", () => {
      expect(AE._lt(1, 0)).toBeFalsy()
    })

    test("-1 < 0", () => {
      expect(AE._lt(-1, 0)).toBeTruthy()
    })

    test("0 < -1 fails", () => {
      expect(AE._lt(0, -1)).toBeFalsy()
    })

    test("-535 < 271", () => {
      expect(AE._lt(-535, 271)).toBeTruthy()
    })

    test("271 < -535", () => {
      expect(AE._lt(271, -535)).toBeFalsy()
    })

    test("0 < 0 fails", () => {
      expect(AE._lt(0, 0)).toBeFalsy()
    })

  })


})