import { POPPER_CONTENT_INJECTION_KEY, POPPER_INJECTION_KEY } from './constants'
import type { PopperProps } from './types'
import { PopperContext } from './usePopper'

const ElPopper: React.FC<PopperProps> = ({ children }) => {
  return (
    <PopperContext.Provider value={{ POPPER_INJECTION_KEY, POPPER_CONTENT_INJECTION_KEY }}>
      {children}
    </PopperContext.Provider>
  )
}

export default ElPopper
