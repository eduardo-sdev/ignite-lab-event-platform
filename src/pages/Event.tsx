import { Header } from '../comps/Header'
import { Lesson } from '../comps/Lesson'
import { Siderbar } from '../comps/Siderbar'
import { Video } from '../comps/Video'

export const Event = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className="flex flex-1">
        <Video />
        <Siderbar />
      </main>
    </div>
  )
}
