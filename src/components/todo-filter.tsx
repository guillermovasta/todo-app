import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Filter } from 'lucide-react'
import type { FC } from 'react'
import type { TodoFilter } from '../reducer'
import { useTodosContext } from '../context'

const contentClass =
  'bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade'
const itemClass =
  'group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 cursor-pointer hover:bg-slate-100 data-[state=checked]:bg-red-200'

const TodoFilter: FC = () => {
  const { setTodoFilter, filter } = useTodosContext()

  return (
    <div>
      <div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button aria-label="Filter">
              <Filter />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content className={contentClass} sideOffset={5}>
              <DropdownMenu.RadioGroup
                value={filter}
                onValueChange={(selected) =>
                  setTodoFilter(selected as TodoFilter)
                }
              >
                <DropdownMenu.RadioItem className={itemClass} value="all_todos">
                  All
                </DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem
                  className={itemClass}
                  value="completed_todos"
                >
                  Completed
                </DropdownMenu.RadioItem>
              </DropdownMenu.RadioGroup>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
      <div></div>
    </div>
  )
}

export { TodoFilter }
