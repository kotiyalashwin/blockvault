# BlockVault

BlockVault is a full-stack decentralized application built to explore Solana blockchain development by enabling users to securely anchor document hashes on-chain. The project integrates file storage, hashing, wallet authentication, and blockchain transactions into a cohesive, production-ready workflow.

---

## Features

- Upload documents securely to AWS S3
- Generate SHA-256 hash of the uploaded document
- Anchor the hash on Solana blockchain through user wallet signature
- Persist transaction hashes in the backend for audit and verification
- Verify anchored documents via Solana transaction explorer
- Wallet-based authentication supporting Phantom, Solflare, and other adapters

---

## Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Backend:** Next.js API routes, Prisma ORM, PostgreSQL (or your preferred database)
- **Storage:** AWS S3 for file uploads
- **Blockchain:** Solana Web3.js, @solana/wallet-adapter packages
- **Authentication:** Wallet-based authentication via wallet-adapter-react

---

## Getting Started

### Prerequisites

- Node.js >=16.x
- A Solana wallet (Phantom recommended)
- AWS account with an S3 bucket configured
- PostgreSQL or compatible database
- (Optional) Solana CLI tools for devnet/localnet testing

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/blockvault.git
   cd blockvault
   ```

   2.Install dependencies:

```bash
npm install
```

    3.Environment variables:

    ```bash
      AWS_S3_BUCKET=your-s3-bucket-name
      AWS_ACCESS_KEY_ID=your-access-key
      AWS_SECRET_ACCESS_KEY=your-secret-key
      AWS_REGION=your-region
      DATABASE_URL=your-database-connection-string
      NEXT_PUBLIC_SOLANA_NETWORK=devnet

    ```

    4.Run Migrations

    5.Start Locally
      ```bash
      npm run dev
      ```

---

## Usage

-Navigate to http://localhost:3000 in your browser

-Connect your Solana wallet (Phantom, Solflare, etc.)

-Upload a document to AWS S3 via the UI

-Click "Anchor to Solana" to generate the hash, sign the transaction, and anchor the hash on-chain

-View the transaction hash on Solana Explorer and verify integrity

-The backend stores the txHash linked to your document for audit and verification

## SOLANA integrations:

-The blockchain anchoring happens in the anchorHashOnSolana function:

-Constructs a Solana transaction using @solana/web3.js

-Adds a Memo Program instruction embedding the SHA-256 hash of the document

-Uses the connected wallet adapter’s sendTransaction method to sign and broadcast the transaction

-Waits for confirmation using the latest recommended confirmation API (passing blockhash and last valid block height)

-Returns the transaction signature (txHash) as proof of anchoring

-This design leverages Solana's Memo Program, which avoids writing custom on-chain programs while still providing verifiable on-chain data storage.

```

```
