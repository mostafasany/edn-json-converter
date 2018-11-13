import { TestBed } from '@angular/core/testing';

import { JsonConvererServiceService } from './json-converer-service.service';

describe('JsonConvererServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonConvererServiceService = TestBed.get(JsonConvererServiceService);
    expect(service).toBeTruthy();
  });
});
