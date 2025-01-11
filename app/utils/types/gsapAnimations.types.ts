export interface IGsapAnimationParams {
  animatedElement: HTMLImageElement | null
  trigger: HTMLDivElement | null
  end: number
  styles: Record<string, string | number>
}
