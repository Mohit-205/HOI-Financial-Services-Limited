import wallet from './Images/Wallet.png';
import mobile from './Images/mobile 1.png';
import snap from './Images/Hassle-free.png';

const Sub2 = () => {
    return (
       <div className='home_sub1_main'>
        <p className='sub1_p'>
        Here’s why you’ll love HOI
        </p>
        
        <div className='home_sub2'>
            
            <div className='home_sub_child2'>
                <div><img src={wallet} style={{height:"120px", width:"120px", marginBottom:"28px"}}></img></div>
                <div style={{marginBottom:"28px"}}>Incredibly low premiums</div>
                <div style={{fontSize:"14px", fontWeight:"normal"}}> Insuring things that matter to you shouldn’t come at a cost. That’s why when you buy from us, you get insurance that fits your pocket.</div>        
            </div>

        
            <div className='home_sub_child2'>
                <div><img src={mobile} style={{height:"120px", width:"120px", marginBottom:"28px"}}></img></div>
                <div style={{marginBottom:"28px"}}>Superquick and easy</div>
                <div style={{fontSize:"14px", fontWeight:"normal"}}>We’re easy, effortless and 100% digital. Forget paperwork, just access all our services with just a few clicks.</div>        
            </div>

            <div className='home_sub_child2'>
                <div><img src={snap} style={{height:"120px", width:"120px", marginBottom:"28px"}}></img></div>
                <div style={{marginBottom:"28px"}}>Hassle-free claims</div>
                <div style={{fontSize:"14px", fontWeight:"normal"}}>We’re on a mission to make insurance claims stress-free. Just give us a call or file a claim online and experience cashless, speedy claim settlements.</div>        
            </div>

        </div>
       </div>
    )
}

export default Sub2
