import {signOut,useSession} from 'next-auth/react' 

const Profile = () => {
  const {data:session}=useSession();
    var name =session.user.name
    var email=session.user.email
  return (
    <div className="profile">
        <img src={session.user.image} alt="Profile pic" />
        <p className="info">Name      : {name} </p>
        <p className="info">Email     : {email}</p>
        <button class="button-33" role="button" onClick={()=> signOut()}>Sign Out</button>
    </div>
  )
}

export default Profile