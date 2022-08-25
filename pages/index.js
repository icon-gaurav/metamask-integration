import {useEffect, useState} from "react";
import {Contract, providers} from "ethers";

function App() {

    const [isWalletInstalled, setIsWalletInstalled] = useState(false);
    // state for keeping track of current connected account.
    const [account, setAccount] = useState(null);

    useEffect(() => {
        if (window.ethereum) {
            setIsWalletInstalled(true);
        }
    }, []);

    async function connectWallet() {
        window.ethereum
            .request({
                method: "eth_requestAccounts",
            })
            .then((accounts) => {
                setAccount(accounts[0]);
            })
            .catch((error) => {
                alert("Something went wrong");
            });
    }

    if (account === null) {
        return (
            <div style={{
                minWidth: "100vw",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {
                    isWalletInstalled ? (
                        <button onClick={connectWallet} style={{
                            padding: 10,
                            borderRadius: 5,
                            color: "green"
                        }}>Connect Wallet</button>
                    ) : (
                        <p>Install Metamask wallet</p>
                    )
                }

            </div>
        );
    }
    return (
        <div style={{
            minWidth: "100vw",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <p>Connected as: {account}</p>
        </div>
    );
}

export default App;
