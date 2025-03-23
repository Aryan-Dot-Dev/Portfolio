export interface Comment {
  avatar: string
  username: string
  text: string
}

export interface Project {
  id: number
  title: string
  username: string
  userAvatar: string
  thumbnail: string
  images: string[]
  description: string
  likes: number
  comments: Comment[]
  date: string
}

export interface Story {
  id: number
  type: "image" | "video"
  content: string
  caption?: string
}

export interface Highlight {
  id: number
  title: string
  thumbnail: string
  stories: Story[]
}

