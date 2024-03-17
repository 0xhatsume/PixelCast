import { BASE_URL } from "@/utils";
import type { Metadata, ResolvingMetadata } from "next";
import { FrameMetadata, getFrameMetadata } from "@coinbase/onchainkit";


export async function generateMetadata(): Promise<Metadata> {
    const frameMetadata = getFrameMetadata({
        buttons: [
        {
            label: "Connect Starknet Wallet",
            action: "post_redirect",
        }, 
        {
            label:"Play as Guest"
        }],
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

export const viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}