import './Topbar.scss'
import { Icon28UserSquareOutline } from '@vkontakte/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
        <p><a href='#home'><img src="/3d-cube.png" width="28" height="28" alt="Icon"></img></a></p>
        </div>        
        <div className='right'><Icon28UserSquareOutline></Icon28UserSquareOutline></div>
      </div>
    </div>
  )
}
