import type { WalletAdapter } from "@solana/wallet-adapter-base";

import { Connection, Transaction } from "@solana/web3.js";
import { createMemoInstruction } from "@solana/spl-memo";

export const anchorHashToSolana = async (
  wallet: WalletAdapter,
  hash: string,
  connection: Connection
): Promise<string> => {
  try {
    // console.log(wallet);
    if (!wallet.publicKey) throw new Error("Wallet not connected");

    const memoInstruction = createMemoInstruction(hash);

    const txn = new Transaction().add(memoInstruction);
    txn.feePayer = wallet.publicKey;
    const { blockhash, lastValidBlockHeight } =
      await connection.getLatestBlockhash();
    txn.recentBlockhash = blockhash;

    const txnid = await wallet.sendTransaction(txn, connection);
    await connection.confirmTransaction(
      { signature: txnid, blockhash, lastValidBlockHeight },
      "confirmed"
    );
    return txnid;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to Anchor on SOLANA");
  }
};
