import logo from './logo.svg';
import './App.css';
import ProfileCard from './ProfileCard/profileCard';
import Naav from './Naav/navbar'
import AuthForm from './AuthForm/authForm';

function App() {
  return (
   <div>
        <ProfileCard></ProfileCard>
        {/* <Naav></Naav> */}
        <AuthForm></AuthForm>
   </div>
  );
}

export default App;
