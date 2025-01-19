export interface IExperienceCard {
  id: number
  name: string
  link: string
  duration: string
  description: string[]
  products: IExperienceProducts[]
  team: string[]
}

export interface IExperienceProducts {
  id: number
  name: string
  link?: string
}

export interface IEducationCards {
  id: number
  name: string
  organization: string
  organizationLink: string
  certificateLink?: string
  description: string
  date: string
}

export interface ITechniquesOptions {
  id: number
  value: string
  name: string
}
