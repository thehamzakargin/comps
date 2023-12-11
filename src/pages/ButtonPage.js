import Button from '../components/Button';
import { GoBell , GoDatabase} from "react-icons/go";

function ButtonPage () {
    const handleClick = () => {
    }
    return (
    <div>
        <div>
            <Button success rounded outline onClick={handleClick} className='mb-5'>
            <GoBell  className="mr-1"/>
            Click me!
            </Button>
        </div>
        <div>
            <Button warning rounded outline >
            <GoBell className="mr-1"/>
            Buy now
            </Button>
        </div>
        <div>
            <Button warning outline >
            <GoDatabase/>
            See Deal!
            </Button>
        </div>
        <div>
            <Button danger outline>
            Hide Ads
            </Button>
        </div>
        <div>
            <Button primary rounded outline>
            Something
            </Button>
        </div>
    </div>
    );
};

export default ButtonPage;