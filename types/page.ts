import type { Widget } from './widget'

export interface Page {
    id: string,
    attributes: {
      slug: string,
      title: string,
      published: boolean,
      widgets: Widget[]
    }
}
