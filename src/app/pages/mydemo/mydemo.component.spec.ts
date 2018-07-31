import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MydemoComponent } from '@pages/mydemo/mydemo.component'

describe('MydemoComponent', () => {
  let component: MydemoComponent
  let fixture: ComponentFixture<MydemoComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MydemoComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MydemoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
