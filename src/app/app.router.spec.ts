import { AppRouterModule } from '@app/app.router'

describe('AppRouterModule', () => {
  let appRouterModule: AppRouterModule

  beforeEach(() => {
    appRouterModule = new AppRouterModule()
  })

  it('should create an instance', () => {
    expect(appRouterModule).toBeTruthy()
  })
})
