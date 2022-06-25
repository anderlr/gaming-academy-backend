import { checkUUID } from "./GeneralValidators";

describe("UUIDValidators", () => {
  test("CT1", () => {
    const SUT = "";
    expect(checkUUID(SUT)).toBe(false);
  });

  test("CT2", () => {
    const SUT = "801a809b-6a43-44c-ac46-b8816fab5f90";
    expect(checkUUID(SUT)).toBe(false);
  });

  test("CT3", () => {
    const SUT = "98d62gfa-81e7-4243-938b-2487bf8fb95a";
    expect(checkUUID(SUT)).toBe(false);
  });
  
  test("CT4", () => {
    const SUT = "09ad9771-ed25-45@0-9007-5076d0398360";
    expect(checkUUID(SUT)).toBe(false);
  });

  test("CT5", () => {
    const SUT = "be10b302-95f0-4ec4-8ba7-60c7b203a4ab";
    expect(checkUUID(SUT)).toBe(true);
  });
});
