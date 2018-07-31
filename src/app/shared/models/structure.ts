export interface IConfig {
  rootUrl: string
}

export interface AppUser {
  Token: string
  EmployeeId: number
  EmployeeName: string
  Mobile?: string
  Email?: string
  IsAdmin: boolean

  // 用于登录用户，如果true，为自己和他人订票都不要审批
  IsGreenChannel: boolean

  CanBookingForOthers: boolean
  CorpId: number
  CorpName: string
  DeptName: string
  CorpBusinessTypes: string
  CorpPayMode: string

  // 全公司一致，是否需要审批，IsGreenChannle优先级更高。
  ApprovalRequired: boolean

  OverrunOption: string
  AirInsuranceRequired: boolean

  // 全公司一致，和具体员工无关
  IsProjectRequired: boolean

  DefaultCity?: string
}
