import cuddleLogo from '../assets/CuddleFab logo 2.jpg';  

function Logo() {
    return (
        <div>
            <img 
                src={cuddleLogo} 
                alt="logo" 
                style={{ width: '33px', height: 'auto' }}
            />
        </div>
    )
}

export default Logo;