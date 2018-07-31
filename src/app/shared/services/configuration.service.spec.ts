import { TestBed, inject } from '@angular/core/testing'

import { ConfigurationService } from '@services/configuration.service'

describe('ConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigurationService]
    })
  })

  it('should be created', inject(
    [ConfigurationService],
    (service: ConfigurationService) => {
      expect(service).toBeTruthy()
    }
  ))
})
