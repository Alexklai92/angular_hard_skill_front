export interface User {
    email: string
    password: string
}

export interface Skill {
    id: number
    title: string
    author: string
    description: string
    created: number
    updated?: number
    finished: boolean
    link_approve_first: string
    link_approve_second: string
    type: string
}

export interface NewSkill {
    title: string
    author: string
    type: string
}