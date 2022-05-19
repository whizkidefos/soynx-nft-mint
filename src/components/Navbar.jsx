import React from 'react';

const Navbar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            setAccounts(accounts);
        }
    }

    return (
        <nav>
            {/* Left Side */}
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Instagram</div>

            {/* Right Side */}
            <div className="right-nav">
                <a href='#'>About</a>
                <a href='#'>Mint</a>
                <a href='#'>Team</a>

                {isConnected
                    ? (<p>Connected</p>)
                    : (<button onClick={connectAccount}>Connect Wallet</button>)
                }
            </div>
        </nav>
    )
}

export default Navbar;