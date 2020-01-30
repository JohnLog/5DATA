import { TestBed } from "@angular/core/testing";

import { EtudiantService } from "./etudiants.service";

describe("EtudiantService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: EtudiantService = TestBed.get(EtudiantService);
    expect(service).toBeTruthy();
  });
});
