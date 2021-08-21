import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/37546/woman-portrait-face-studio-37546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                        <label htmlFor="fileInput">
                            <i class="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id='fileInput' style={ {display:'none'} }/>
                    </div>
                    <label >Username</label>
                    <input type="text" placeholder='Cronos' />
                    <label >Email</label>
                    <input type="email" placeholder='hello@cronosmedia.ro' />
                    <label >Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
