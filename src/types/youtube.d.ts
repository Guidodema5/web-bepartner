interface Window {
  YT: typeof YT
  onYouTubeIframeAPIReady: (() => void) | undefined
  fbq: (...args: unknown[]) => void
}

declare namespace YT {
  class Player {
    constructor(
      element: HTMLElement | string,
      options: {
        videoId: string
        playerVars?: Record<string, unknown>
        events?: {
          onStateChange?: (event: OnStateChangeEvent) => void
          onReady?: (event: { target: Player }) => void
        }
      }
    )
    getCurrentTime(): number
    getDuration(): number
    destroy(): void
  }

  interface OnStateChangeEvent {
    data: number
    target: Player
  }

  const PlayerState: {
    PLAYING: number
    PAUSED: number
    ENDED: number
    BUFFERING: number
  }
}
