'use client'

import { Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import { KBarSearchProvider } from 'pliny/search/KBar'
import { useRouter } from 'next/navigation'

export const SearchProvider = ({ children }) => {
  const router = useRouter()
  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: 'search.json',
        defaultActions: [
          {
            id: 'homepage',
            name: 'Homepage',
            keywords: '',
            shortcut: ['h'],
            section: 'Home',
            perform: () => router.push('/'),
          },
          {
            id: 'tags',
            name: 'Tags',
            keywords: '',
            shortcut: ['t'],
            section: 'Home',
            perform: () => router.push('/tags'),
          },
          {
            id: 'projects',
            name: 'Projects',
            keywords: '',
            shortcut: ['p'],
            section: 'Home',
            perform: () => router.push('/projects'),
          },
          {
            id: 'about',
            name: 'About',
            keywords: '',
            shortcut: ['a'],
            section: 'Home',
            perform: () => router.push('/about'),
          },
        ],
        onSearchDocumentsLoad(json) {
          return json.map((post: CoreContent<Blog>) => ({
            id: post.path,
            name: post.title,
            keywords: post?.summary || '',
            section: 'Blog',
            subtitle: post.tags.join(', '),
            perform: () => router.push(post.path),
          }))
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}
