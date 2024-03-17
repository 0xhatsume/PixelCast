import { BASE_URL } from "@/utils";
import Head from "next/head";
import type { Metadata, ResolvingMetadata } from "next";
import { FrameMetadata, getFrameMetadata } from "@coinbase/onchainkit";


export async function generateMetadata(): Promise<Metadata> {
  const frameMetadata = getFrameMetadata({
    buttons: [`Connect Starknet Wallet`,`Guest`],
    image: ``,
    post_url: `${BASE_URL}/api/redirect`,
  });

  return {
    title: "PixeLaw - pixel-based Autonomous World",
    description: "PixeLAW is a pixel-based autonomous world. And we provide the way to build a fully on-chain game.",
    openGraph: {
      title: "PixeLaw - pixel-based Autonomous World",
      description: "PixeLAW is a pixel-based autonomous world. And we provide the way to build a fully on-chain game.",
      images: [`https://jade-doubtful-hippopotamus-568.mypinata.cloud/ipfs/QmYU1StXRTHJG9GsX83sB2K6VQ1gsjdnpbPgrzHViBShyx`],
    },
    other: {
      ...frameMetadata,
    },
  };
}

export default function Home() {
  return (
    <>
      {/* <Head>
        <meta property="og:title" content="Frame" />
        <meta property="og:image" content={`https://jade-doubtful-hippopotamus-568.mypinata.cloud/ipfs/QmYU1StXRTHJG9GsX83sB2K6VQ1gsjdnpbPgrzHViBShyx`} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={`https://jade-doubtful-hippopotamus-568.mypinata.cloud/ipfs/QmYU1StXRTHJG9GsX83sB2K6VQ1gsjdnpbPgrzHViBShyx`} />
        <meta property="fc:frame:button:1" content="Connect Starknet Wallet" />
        <meta property="fc:frame:button:1:action" content="post_redirect" />
        <meta
          property="fc:frame:post_url"
          content={`${BASE_URL}/api/redirect`}
        />
      </Head> */}
      Henlos Bro new FrameMetadata
    </>
  );
}
