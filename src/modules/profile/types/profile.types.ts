export interface Root {
  id: string
  fullname: string
  gender: string
  date_of_birth: string
  position: string
  avatar: string
  branch: Branch
  social_media: SocialMedum[]
}

export interface Branch {
  id: number
  email: string
  name: string
  address: string
}

export interface SocialMedum {
  twitter: string
  facebook: string
  instagram: string
}
