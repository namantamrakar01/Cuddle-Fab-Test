import cuddleLogo from '../assets/CuddleFab logo 2.jpg';  

function Logo() {
    return (
        <div>
            <img 
                src={cuddleLogo} 
                alt="logoDemo" 
                style={{ width: '33px', height: 'auto' }}
            />
        </div>
    )
}

export default Logo;
