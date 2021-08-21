import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='HeaderTitleSm'>React & Node</span>
                <span className='HeaderTitleLg'>Blog</span>
            </div>
            <img src="https://images.pexels.com/photos/163848/road-mountains-sunset-path-163848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="headerImg" />
        </div>
    )
}
