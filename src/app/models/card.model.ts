import { Message } from "./message.model";

export interface Card {
    id?: string
    recipient: string
    email: string
    sender: string
    type: string
    scheduledDate: {
        day: number
        month: number
        year: number
    }
    scheduledTime: {
        hour: number
        minute: number
        second: number
    }
    messages: Message[]
}
