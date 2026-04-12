'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

type VideoContextType = {
  unlocked: boolean
  unlock: () => void
}

const VideoContext = createContext<VideoContextType>({
  unlocked: false,
  unlock: () => {},
})

export function VideoProvider({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false)
  const unlock = useCallback(() => setUnlocked(true), [])

  return (
    <VideoContext.Provider value={{ unlocked, unlock }}>
      {children}
    </VideoContext.Provider>
  )
}

export function useVideoUnlock() {
  return useContext(VideoContext)
}
