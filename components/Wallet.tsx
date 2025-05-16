"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { GenHash } from "@/lib/actions/genhash";
import { anchorHashToSolana } from "@/lib/solana";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import axios from "axios";

export default function CustomConnectButton({ url }: { url: string }) {
  const { connected, wallet, disconnect, publicKey } = useWallet();
  const wasConnected = useRef(false);
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState("");
  const connection = new Connection(clusterApiUrl("devnet"));

  const handleAnchoring = async () => {
    if (!wallet) {
      toast.error("Please connect your wallet first");
      return;
    }
    if (!wallet || !connected) {
      toast.error("Please connect your wallet first");
      return;
    }
    setLoading(true);
    setTxHash("");
    try {
      const hash = await GenHash(url);

      const txHash = await anchorHashToSolana(wallet.adapter, hash, connection);
      // console.log(txHash);
      toast.success("Anchored successfully! TxHash: " + txHash);
      const res = await axios.post("/api/save-txn", {
        fileurl: `${url as string}`,
        txHash: txHash,
      });

      if (res.status !== 200) {
        throw new Error("Failed to save transaction on backend");
      }

      toast.success("Transaction Saved");
    } catch (error: any) {
      toast.error(error?.messsage || "Failed to anchor to SOLANA");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (connected) {
      toast.success("Wallet Connected Succssfully");
    }
    if (wasConnected.current && !connected) {
      toast.error("Wallet disconnected", { icon: "⚠️" });
    }
    wasConnected.current = connected;
  }, [connected]);

  return (
    <>
      <div className="p-4">
        {!connected ? (
          <WalletMultiButton />
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-orange-500 font-mono text-sm">
                {publicKey?.toBase58().slice(0, 6)}...
                {publicKey?.toBase58().slice(-4)}
              </span>
              <Button
                onClick={() => disconnect()}
                className="border border-orange-400 bg-orange-400/20 text-orange-400 px-3 py-1 rounded-md
                       hover:bg-orange-400 hover:text-white transition duration-300"
              >
                Disconnect
              </Button>
            </div>

            <Button onClick={handleAnchoring} disabled={loading || !url}>
              {loading ? (
                "Anchoring to SOLANA..."
              ) : (
                <>
                  Anchor To
                  <span className="tracking-widest">SOLANA</span>
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
