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